import { instance } from "../git-hub/gitHubApi";

export const todosAPI = {
  async fetchTodos() {
    return await instance.get("/todo-lists").then((res) => res.data);
  },
};
