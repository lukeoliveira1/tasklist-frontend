import styles from "@/styles/list.module.css";
import { useEffect, useState } from "react";
import Task from "@/components/Task";
import Header from "@/components/Header";
import api from "@/services/api";

type TaskData = {
  id: number;
  title: string;
  description?: string;
  status: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    api.get<TaskData[]>("/task/").then((response) => {
      setTasks(response.data);
    });
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
                title={task.title}
                description={task.description}
                status={task.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
