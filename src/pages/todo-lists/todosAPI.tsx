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
  // Lists
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
          title: title,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Server error adding todo list:", error);

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
      console.error("Server error removing todo list:", error);

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
      console.error("Server error updating todo list:", error);

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
      console.error("Server error reordering todo list:", error);

      return {
        resultCode: ResultCodesEnum.ResultCodeError,
        messages: ["An error occurred while reordering todo list."],
        data: {},
      };
    }
  },

  // Tasks
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
        console.error("Server error fetching todo tasks:", error.message);
      }

      return { items: [], totalCount: 0, error: "Failed to fetch tasks" };
    }
  },

  async addTodoTaskApi(todolistId: string, title: string) {
    try {
      const response = await instance.post<AddRemoveTodoTaskApiType>(
        `todo-lists/${todolistId}/tasks`,
        {
          title: title,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Server error fetching todo tasks:", error);

      return {
        data: {},
        resultCode: ResultCodesEnum.ResultCodeError,
        messages: ["Something wrong"],
      };
    }
  },

  async updateTodoTaskApi(
    todolistId: string,
    taskId: string,
    newTitle: string,
    completed: boolean,
  ) {
    try {
      const response = await instance.put<AddRemoveTodoTaskApiType>(
        `todo-lists/${todolistId}/tasks/${taskId}`,
        {
          title: newTitle,
          description: "all",
          completed: completed,
          status: 0,
          priority: 0,
          startDate: new Date(),
          deadline: new Date(),
        },
      );

      return response.data;
    } catch (error) {
      console.error("Server error updating todo task:", error);

      throw error;
    }
  },

  async removeTodoTaskApi(todolistId: string, taskId: string) {
    try {
      const response = await instance.delete<AddRemoveTodoTaskApiType>(
        `todo-lists/${todolistId}/tasks/${taskId}`,
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error("Server error removing todo task:", error);

      throw error;
    }
  },
};
