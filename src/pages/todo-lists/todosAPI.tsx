import { v4 as uuidv4 } from "uuid";

import { instance } from "../../api/API";

import {
  AddRemoveTodoListsApiType,
  AddRemoveTodoTaskApiType,
  ReorderTodoListApiType,
  ToDoListsType,
  TodoTaskType,
  TodoTasksType,
} from "./todoListsTypes";
import { ResultCodesEnum } from "../../api/apiTypes";

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

  async updateTodoListApi(todolistId: string, newTitle: string) {
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

  //! todo /todo-lists/{todolistId}/reorder
  async reorderTodoListApi(todolistId: string, putAfterItemId: string) {
    try {
      const response = await instance.put<ReorderTodoListApiType>(
        `todo-lists/${todolistId}/reorder`,
        {
          putAfterItemId,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error reordering todo list:", error);

      return {
        resultCode: ResultCodesEnum.ResultCodeError,
        messages: ["An error occurred while reordering todo list."],
        data: {},
      };
    }
  },

  async addTodoTaskApi(todolistId: string, title: string) {
    try {
      const response = await instance.post<AddRemoveTodoTaskApiType>(
        `todo-lists/${todolistId}/tasks`,
        {
          description: "",
          title: title,
          completed: false,
          status: 0,
          priority: 0,
          startDate: new Date(),
          deadline: null,
          id: uuidv4(),
          todoListId: todolistId,
          order: 0,
          addedDate: new Date(),
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching todo tasks:", error);

      return {
        data: {},
        resultCode: ResultCodesEnum.ResultCodeError,
        messages: ["Something wrong"],
      };
    }
  },

  async fetchTodoTasksApi(
    todolistId: string,
    count: number = 10,
    page: number = 1,
  ): Promise<{
    items: Array<TodoTaskType>;
    totalCount: number;
    error: string;
  }> {
    try {
      const response = await instance.get<TodoTasksType>(
        `todo-lists/${todolistId}/tasks?count=${count}&page=${page}`,
      );

      if (response.data.error) {
        throw new Error("Failed to fetch tasks");
      }

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching todo tasks:", error.message);
      }

      return { items: [], totalCount: 0, error: "Failed to fetch tasks" };
    }
  },

  async updateTodoTaskApi(
    todolistId: string,
    taskId: string,
    newTitle: string,
  ) {
    try {
      const response = await instance.put<AddRemoveTodoTaskApiType>(
        `todo-lists/${todolistId}/tasks/${taskId}`,
        {
          title: newTitle,
          description: "",
          completed: false,
          status: 0,
          priority: 0,
          startDate: new Date(),
          deadline: new Date(),
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error updating todo task:", error);

      throw error;
    }
  },

  async removeTodoTaskApi(todolistId: string, taskId: string) {
    try {
      const response = await instance.delete<AddRemoveTodoTaskApiType>(
        `todo-lists/${todolistId}/tasks/${taskId}`,
      );

      return response.data;
    } catch (error) {
      console.error("Error removing todo task:", error);

      throw error;
    }
  },
};
