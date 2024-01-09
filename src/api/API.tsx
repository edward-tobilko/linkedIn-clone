import axios from "axios";

export const instance = axios.create({
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
  async followUser(userId: string) {
    return await instance.post(`follow/${userId}`, {}).then((res) => res.data);
  },

  // Видаляємо користувача (unFollow)
  async unFollowUser(userId: string) {
    return await instance.delete(`follow/${userId}`).then((res) => res.data); // В get и delete другим параметром вказуємо об'єкт настройки(withCredentials: true) - URI параметр
  },

  // Отримуємо статус користувача - цей метод переадрисовує нас на об'єкт profileAPI
  async fetchUserStatusById(userId: string) {
    console.warn("Please, go to the profileAPI method!");

    return await profileAPI.fetchUserStatusById(userId);
  },
};

// For the Profile component
export const profileAPI = {
  // Отримуємо поточну сторінку користувача
  async fetchCurrentUserPageById(userId: string) {
    return await instance.get(`profile/${userId}`).then((res) => res.data);
  },

  // Отримуємо статус користувача
  async fetchUserStatusById(userId: string) {
    return await instance
      .get(`profile/status/${userId}`)
      .then((res) => res.data);
  },

  // Змінюємо динамічно статус
  async updateUserStatus(status: string) {
    return await instance
      .put(`profile/status`, { status: status })
      .then((res) => res.data); //? другим параметром мы додаємо JSON об'єкт, який потребує сервер, в нашому випадку це status (дивитися в API -> /profile/status -> PUT -> Request -> Type and Properties)
  },

  // Загрузка фото
  async downloadPhoto(photoFile: any) {
    let formData = new FormData(); //? формуємо новий об'єкт
    formData.append("image", photoFile); //? додаємо першим параметром images (API -> /profile/photo -> Request -> Properties -> image ), а другим параметром файл, який ми отримали з input
    return await instance.put(`/profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

// For the AppRoutes, Auth components
export const authAPI = {
  // Авторизуємо себе
  async authorizationMe() {
    return await instance.get("auth/me");
  },

  // Логірування користувача
  async getLoginApi(
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: boolean,
  ) {
    return await instance.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },

  // Вилогірування користувача
  async logoutApi() {
    return await instance.delete("auth/login");
  },

  // Captcha
  async getCaptchaUrl() {
    return await instance.get("security/get-captcha-url");
  },
};
