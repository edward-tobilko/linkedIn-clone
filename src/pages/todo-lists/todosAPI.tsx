import { v4 as uuidv4 } from "uuid";

import { instance } from "../../api/API";

import { AddRemoveTodoListsApiType, ToDoListsType } from "./todoListsTypes";

export const todosAPI = {
  async fetchTodoListsApi() {
    return await instance
      .get<ToDoListsType[]>("todo-lists")
      .then((res) => res.data);
  },

  async addTodoListApi(title: string) {
    try {
      const response = await instance.post<AddRemoveTodoListsApiType>(
        "todo-lists",
        {
          id: uuidv4(),
          title: title,
          addedDate: new Date(),
          order: 0,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error adding todo list:", error);

      throw error;
    }
  },

  async removeTodoListApi(todolistId: string) {
    try {
      const response = await instance.delete<AddRemoveTodoListsApiType>(
        `todo-lists/${todolistId}`,
      );

      return response.data;
    } catch (error) {
      console.error("Error removing todo list:", error);

      throw error;
    }
  },

  async updateTodoList(todolistId: string, newTitle: string) {
    try {
      const response = await instance.put(`todo-lists/${todolistId}`, {
        title: newTitle,
      });

      return response.data;
    } catch (error) {
      console.error("Error updating todo list:", error);

      throw error;
    }
  },
};
