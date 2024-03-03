import api from "@/services/api";
import { TaskForm } from "@/types/task";

export const putUpdateTask = async (
  taskId: number,
  { title, description, status }: TaskForm
) => {
  try {
    return await api.put<TaskForm>(`task/${taskId}/`, {
      title,
      description,
      status,
    });
  } catch (error) {
    console.log(error);
  }
};
