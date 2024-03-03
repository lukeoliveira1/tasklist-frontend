import api from "@/services/api";
import { TaskForm } from "@/types/task";

export const postCreateTask = async ({
  title,
  description,
  status,
}: TaskForm) => {
  try {
    return await api.post<TaskForm>("task/", { title, description, status });
  } catch (error) {
    console.log(error);
  }
};
