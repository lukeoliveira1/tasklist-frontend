import api from "@/services/api";

export interface TaskForm {
    id?: number;
    title: string,
    description?: string,
    status: string,
}

export const postCreateTask = async ({
    title,
    description,
    status,
} : TaskForm) => {
    try {
        return await api.post<TaskForm>("task/", {title, description, status,});
    } catch (error) {
        console.log(error) 
    }
}