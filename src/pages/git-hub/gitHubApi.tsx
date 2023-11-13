import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    // Authorization:
    //   "Bearer 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",
  }, //? Для скасування ліміту запитів на сервер
});
