import axios from "axios";

import { CurrentProfilePageType } from "../pages/profile/profileTypes";
import {
  AuthMeApiType,
  DownloadPhotoApiType,
  FetchCurrentUserPageByIdApiType,
  FetchSocialUsersApiType,
  FollowUnfollowApiType,
  LoginApiDataType,
  LoginLogoutApiType,
  ProfileInfoEditModeApiType,
  ResultCodesEnum,
  UpdateUserStatusApiType,
} from "./apiTypes";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  timeout: 0,
  withCredentials: true, //? завдяки цьому параметру cookie робить запит на інший домен
  headers: { "API-KEY": "aeecff0a-0646-43b9-a0dd-39f979f0df41" },
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
