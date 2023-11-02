import axios from "axios";

import { CurrentProfilePageType } from "../pages/profile/profileTypes";
import {
  AuthMeApiType,
  MessagesReceivedCallbackType,
  DownloadPhotoApiType,
  FetchSocialUsersApiType,
  FollowUnfollowApiType,
  LoginApiDataType,
  LoginLogoutApiType,
  ProfileInfoEditModeApiType,
  ResultCodesEnum,
  UpdateUserStatusApiType,
  StatusChangedCallbackType,
} from "./apiTypes";
import { StatusType } from "../redux/reducers/chat-reducer/chatReducerTypes";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  timeout: 0,
  withCredentials: true, //? завдяки цьому параметру cookie робить запит на інший домен
  headers: { "API-KEY": "5fa4dfc4-2064-42ad-b7e8-4d24ffa78ea5" },
});

// For the Social component
export const socialUsersAPI = {
  //? Отримуємо користувачів
  async fetchSocialUsers(
    currentPage: number,
    usersCount: number,
    searchTerm: string = "",
    filteredFriends: null | boolean = null,
  ) {
    return await instance
      .get<FetchSocialUsersApiType>(
        `users?page=${currentPage}&count=${usersCount}&term=${searchTerm}` +
          (filteredFriends === null ? "" : `&friend=${filteredFriends}`),
      )
      .then((res) => res.data);
  },

  //? Отримуємо користувачів при пагінації
  async fetchChangedPageUsers(
    pageNumber: number,
    usersCount: number,
    searchTerm: string = "",
    filteredFriends: null | boolean = null,
  ) {
    return await instance
      .get<FetchSocialUsersApiType>(
        `users?page=${pageNumber}&count=${usersCount}&term=${searchTerm}` +
          (filteredFriends === null ? "" : `&friend=${filteredFriends}`),
      )
      .then((res) => res.data);
  },

  //? Добавляємо користувача (follow)
  async followUser(userId: number) {
    return await instance
      .post<FollowUnfollowApiType>(`follow/${userId}`, {})
      .then((res) => res.data);
  },

  //? Видаляємо користувача (unFollow)
  async unFollowUser(userId: number) {
    return await instance
      .delete<FollowUnfollowApiType>(`follow/${userId}`)
      .then((res) => res.data); //? В get и delete другим параметром вказуємо об'єкт настройки(withCredentials: true) - URI параметр
  },

  //? Отримуємо статус користувача - цей метод переадрисовує нас на об'єкт profileAPI
  async fetchUserStatusById(userId: number | null) {
    console.warn("Please, go to the profileAPI method!");

    return await profileAPI.fetchUserStatusById(userId);
  },
};

// For the Profile component
export const profileAPI = {
  //? Отримуємо поточну сторінку користувача
  async fetchCurrentUserPageById(userId: number | null) {
    return await instance.get(`profile/${userId}`).then((res) => res.data);
  },

  //? Отримуємо статус користувача
  async fetchUserStatusById(userId: number | null) {
    return await instance.get<string>(`profile/status/${userId}`);
  },

  //? Змінюємо динамічно статус
  async updateUserStatus(status: string) {
    return await instance
      .put<UpdateUserStatusApiType>(`profile/status`, { status: status })
      .then((res) => res.data); //? Другим параметром мы додаємо JSON об'єкт, який потребує сервер, в нашому випадку це status (дивитися в API -> /profile/status -> PUT -> Request -> Type and Properties)
  },

  //? Загрузка фото
  async downloadPhoto(photoFile: File) {
    let formData = new FormData(); //? формуємо новий об'єкт
    formData.append("image", photoFile); //? додаємо першим параметром images (API -> /profile/photo -> Request -> Properties -> image ), а другим параметром файл, який ми отримали з input
    return await instance.put<DownloadPhotoApiType>(
      `/profile/photo`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },

  //? Оновлення інформації користувача
  async profileInfoEditMode(profileProperties: CurrentProfilePageType) {
    return await instance.put<ProfileInfoEditModeApiType>(
      `/profile`,
      profileProperties,
    ); //? profile object is (API -> /profile -> Request -> Properties)
  },
};

// For the AppRoutes, Auth components
export const authAPI = {
  //? Авторизуємо себе
  async authorizationMe() {
    return await instance.get<AuthMeApiType>("auth/me"); //? AuthMeApiType - створений тип, який прокидуємо в метод get як дженерик. Що описувати в типі, потрібно дивитися в документацію: https://social-network.samuraijs.com/docs# -> /auth/me -> get.
  },

  //? Логірування користувача
  async getLoginApi(
    email: string, // 1992eduard777clone@gmail.com
    password: string, // email4769PageClone
    rememberMe: boolean | undefined,
    captcha: string | undefined,
  ) {
    return await instance.post<
      LoginLogoutApiType<LoginApiDataType, ResultCodesEnum>
    >("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },

  //? Вилогірування користувача
  async logoutApi() {
    return await instance.delete<LoginLogoutApiType<ResultCodesEnum>>(
      "auth/login",
    );
  },

  //? Captcha
  async getCaptchaUrl() {
    return await instance.get<{ url: string }>("security/get-captcha-url");
  },
};

// For the WebSocket chat
//? Objects
let messages = {
  "messages-received": [] as MessagesReceivedCallbackType[],
  "status-changed": [] as StatusChangedCallbackType[],
};
let wsChannel: WebSocket;

//? Extra functions
const closeHandler = (e: CloseEvent) => {
  console.log(
    "Socket is closed. Reconnect will be attempted in 3 seconds.",
    e.reason,
  );

  setTimeout(() => {
    wsChannel.close();
    reconnectWs();
  }, 3000);
};

const cleanUp = () => {
  wsChannel?.removeEventListener("close", closeHandler);
  wsChannel?.removeEventListener("message", messageHandler);
  wsChannel.addEventListener("open", () =>
    notifySubscribersAboutStatus("ready"),
  );
  wsChannel?.addEventListener("error", (event) => {
    console.error("Socket encountered error: Closing socket", event);

    wsChannel.close();
  });
};

const notifySubscribersAboutStatus = (status: StatusType) => {
  messages["status-changed"].forEach((statusChanged) => statusChanged(status));
};

//? Main functions
//? Отримуємо з'єднання з WebSocket, якщо у нас або в когось відбулось роз'єднання з інтернетом, тобто повторно отримує WebSocket канал
function reconnectWs() {
  if (wsChannel !== null) {
    wsChannel?.removeEventListener("close", closeHandler);
  }

  wsChannel = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx",
  );
  notifySubscribersAboutStatus("pending");

  wsChannel?.addEventListener("close", closeHandler);
  wsChannel.addEventListener("message", messageHandler);
  wsChannel.addEventListener("open", () => {
    notifySubscribersAboutStatus("ready");
  });

  //? Якщо помилка на сервері
  wsChannel?.addEventListener("error", (event) => {
    console.error("Socket encountered error: Closing socket", event);

    wsChannel.close();
  });
}

//? Отримуємо повідомлення по каналу WebSocket
const messageHandler = (e: MessageEvent) => {
  let receivedMessages = JSON.parse(e.data);
  let currentTime = new Date().toLocaleTimeString();

  const receivedMessageWithCurrentTime = receivedMessages.map(
    (msg: Object) => ({
      obj: msg,
      time: currentTime,
    }),
  );

  messages["messages-received"].forEach((msg) =>
    msg(receivedMessageWithCurrentTime),
  );
};

export const chatAPI = {
  //? Підключаємся до WebSocket
  start() {
    reconnectWs();
  },

  //? Відключаємося від WebSocket
  stop() {
    messages["messages-received"] = [];
    messages["status-changed"] = [];
    cleanUp();
    wsChannel.close();
  },

  //? Отримуємо підписку на канал WS
  fetchSubscribeMessages(callback: MessagesReceivedCallbackType) {
    messages["messages-received"].push(callback);
  },

  //? Відписуємося від каналу WS
  unsubscribeMessages(callback: MessagesReceivedCallbackType) {
    messages["messages-received"] = messages["messages-received"].filter(
      (msg) => msg !== callback,
    );
  },

  //? Отримуємо статус WS
  fetchStatus(callback: StatusChangedCallbackType) {
    messages["status-changed"].push(callback);
  },

  //? Змінюємо статус WS
  changeStatus(callback: StatusChangedCallbackType) {
    messages["status-changed"] = messages["status-changed"].filter(
      (status) => status !== callback,
    );
  },

  //? Додаємо нове повідомлення
  addNewMessage(message: string) {
    wsChannel.send(message);
  },
};
