import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  timeout: 0,
  withCredentials: true, // завдяки цьому параметру cookie робить запит на інший домен;
  headers: { "API-KEY": "aeecff0a-0646-43b9-a0dd-39f979f0df41" },
});

// For the Social component
export const socialUsersAPI = {
  // Отримуємо користувачів
  async fetchSocialUsers(currentPage: number, usersCount: number) {
    return await instance
      .get(`users?page=${currentPage}&count=${usersCount}`)
      .then((res) => res.data);
  },

  // Отримуємо користувачів при пагінації
  async fetchChangedPageUsers(pageNumber: number, usersCount: number) {
    return await instance
      .get(`users?page=${pageNumber}&count=${usersCount}`)
      .then((res) => res.data);
  },

  // Добавляємо користувача (follow)
  async followUser(userId: number) {
    return await instance.post(`follow/${userId}`, {}).then((res) => res.data);
  },

  // Видаляємо користувача (unFollow)
  async unFollowUser(userId: number) {
    return await instance.delete(`follow/${userId}`).then((res) => res.data); // В get и delete другим параметром вказуємо об'єкт настройки(withCredentials: true) - URI параметр
  },

  // Отримуємо статус користувача - цей метод переадрисовує нас на об'єкт profileAPI
  async fetchUserStatusById(userId: number) {
    console.warn("Please, go to the profileAPI method!");

    return await profileAPI.fetchUserStatusById(userId);
  },
};

// For the Profile component
export const profileAPI = {
  // Отримуємо поточну сторінку користувача
  async fetchCurrentUserPageById(userId: number) {
    return await instance.get(`profile/${userId}`).then((res) => res.data);
  },

  // Отримуємо статус користувача
  async fetchUserStatusById(userId: number) {
    return await instance.get(`profile/status/${userId}`);
  },

  // Змінюємо динамічно статус
  async updateUserStatus(status: string) {
    return await instance.put(`profile/status`, { status: status }); //? другим параметром мы додаємо JSON об'єкт, який потребує сервер, в нашому випадку це status (дивитися в API -> /profile/status -> PUT -> Request -> Type and Properties)
  },
};

// For the AppRoutes component
export const authAPI = {
  // Авторизуємо себе
  async authorizationMe() {
    return await instance.get("auth/me");
  },

  // // Логірування користувача
  // async getLoginApi(
  //   email: string,
  //   password: string,
  //   rememberMe: boolean,
  //   captcha: boolean,
  // ) {
  //   return await instance.post("auth/login", {
  //     email,
  //     password,
  //     rememberMe,
  //     captcha,
  //   });
  // },
};