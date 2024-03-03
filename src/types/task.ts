export type TaskForm = {
  taskId?: number;
  title: string;
  description?: string;
  status: string;
}

export type TaskData = {
  id: number;
  title: string;
  description?: string;
  status: string;
  status_display: string;
};