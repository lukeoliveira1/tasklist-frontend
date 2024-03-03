import api from "@/services/api";
import { TaskForm } from "@/types/task";

export const getTask = async (taskId: number): Promise<TaskForm> => {
  try {
    const response = await api.get<TaskForm>(`task/${taskId}/`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter a tarefa");
  }
};
