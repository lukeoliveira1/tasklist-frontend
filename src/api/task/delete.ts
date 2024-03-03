import api from "@/services/api";

export const deleteTask = async (taskId: number) => {
  try {
    return await api.delete(`/task/${taskId}/`);
  } catch (error) {
    console.log(error);
  }
};
