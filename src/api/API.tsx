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
  fetchSocialUsers(currentPage: any, usersCount: any) {
    return instance
      .get(`users?page=${currentPage}&count=${usersCount}`)
      .then((res) => res.data);
  },

  // Отримуємо користувачів при пагінації
  fetchChangedPageUsers(pageNumber: any, usersCount: any) {
    return instance
      .get(`users?page=${pageNumber}&count=${usersCount}`)
      .then((res) => res.data);
  },

  // Добавляємо користувача (follow)
  followUser(userId: number) {
    return instance.post(`follow/${userId}`, {}).then((res) => res.data);
  },

  // Видаляємо користувача (unFollow)
  unFollowUser(userId: number) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};

// For the Profile component
export const profileAPI = {
  // Отримуємо поточну сторінку користувача
  fetchCurrentUserPageById(userId: number) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
};

// For the AppRoutes component
export const authAPI = {
  // Авторизуємо себе
  authorizationMe() {
    return instance.get("auth/me").then((res) => res.data);
  },
};
