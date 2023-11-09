import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.github.com/",
  headers: { "X-GitHub-Api-Version": "2022-11-28" }, //? Для скасування ліміту запитів на сервер
});
