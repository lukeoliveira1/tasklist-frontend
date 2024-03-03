import api from "@/services/api";
import { TaskData } from "@/types/task";

export const getTasks = async (): Promise<TaskData[]> => {
  try {
    const response = await api.get<TaskData[]>("/task/");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter as tarefas");
  }
};
