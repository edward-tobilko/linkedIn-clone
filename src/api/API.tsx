import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  timeout: 0,
  withCredentials: true, // завдяки цьому параметру cookie робить запит на інший домен;
  headers: { "API-KEY": "4daa91e2-dd5b-4c3b-9a0c-45ab003503f1" },
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
    return await instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};

// For the Profile component
export const profileAPI = {
  // Отримуємо поточну сторінку користувача
  async fetchCurrentUserPageById(userId: number) {
    return await instance.get(`profile/${userId}`).then((res) => res.data);
  },
};

// For the AppRoutes component
export const authAPI = {
  // Авторизуємо себе
  async authorizationMe() {
    return await instance.get("auth/me").then((res) => res.data);
  },
};
