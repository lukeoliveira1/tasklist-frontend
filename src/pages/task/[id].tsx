import styles from "@/styles/task.module.css";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { getByIdTask } from "@/api/task/getById";
import { TaskForm } from "@/types/task";
import { putUpdateTask } from "@/api/task/put";

export default function EditTaskForm() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const fetchTask = async (taskId: string) => {
    try {
      const task = await getByIdTask(Number(taskId));
      setTitle(task.title);
      setDescription(task.description ? task.description : "");
      setStatus(task.status);
    } catch (error) {
      console.error("Failed to fetch task:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTask(id as string);
    }
  }, [id]);

  async function handleEditTask(event: FormEvent) {
    event.preventDefault();

    try {
      const bodyTaskForm: TaskForm = {
        title: title,
        description: description,
        status: status,
      };

      await putUpdateTask(Number(id), bodyTaskForm);

      alert("Tarefa atualizada com sucesso!");
    } catch (error) {
      alert(error);
    } finally {
      router.push("./list");
    }
  }

  return (
    <>
      <div className={styles.body}>
        <div className={styles.divMain}>
          <Header title="Editar Tarefa" on_button={false} />

          <div className={styles.divForm}>
            <form onSubmit={handleEditTask}>
              <label className={styles.labelsForm}>Título: </label>
              <input
                type="text"
                name="title"
                required={true}
                onChange={(event) => setTitle(event.target.value)}
                className={styles.inputsForm}
                value={title}
              />

              <label className={styles.labelsForm}>Descrição: </label>
              <textarea
                name="description"
                required={true}
                onChange={(event) => setDescription(event.target.value)}
                className={styles.inputsForm}
                value={description}
                rows={3}
              />

              <label className={styles.labelsForm}>Status: </label>
              <select
                name="status"
                className={styles.inputsForm}
                onChange={(event) => setStatus(event.target.value)}
                value={status}
              >
                <option value="">----------</option>
                <option value="TODO">A fazer</option>
                <option value="IN_PROGRESS">Em progresso</option>
                <option value="DONE">Concluída</option>
              </select>

              <div className={styles.divFormButton}>
                <a href="./list" className={styles.link}>
                  <input
                    type="button"
                    value="Cancelar"
                    className={styles.buttonForm}
                    style={{
                      backgroundColor: "#fff",
                      color: "#4B4B4B",
                    }}
                    formNoValidate
                  />
                </a>
                <input
                  type="submit"
                  value="Salvar"
                  className={styles.buttonForm}
                  style={{
                    backgroundColor: "#10B786",
                    color: "#FFFFFF",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
