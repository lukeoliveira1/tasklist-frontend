import styles from "@/styles/list.module.css";
import { useEffect, useState } from "react";
import Task from "@/components/Task";
import Header from "@/components/Header";
import { getTasks } from "@/api/task/get";
import { TaskData } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response);
    } catch (error) {
      console.error("Failed to fetch task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.divMain}>
          <Header title="Lista de Tarefas" on_button={true} />

          <div className={styles.divItems}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                taskId={task.id}
                title={task.title}
                description={task.description}
                status={task.status_display}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
