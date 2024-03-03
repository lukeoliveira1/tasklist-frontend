import styles from "@/styles/task.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { postCreateTask } from "@/api/task/post";
import Header from "@/components/Header";
import { TaskForm } from "@/types/task";

export default function CreateTaskForm() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  async function handleCreateUsuario(event: FormEvent) {
    event.preventDefault();

    try {
      const bodyTaskForm: TaskForm = {
        title: title,
        description: description,
        status: status,
      };

      await postCreateTask(bodyTaskForm);

      setTitle("");
      setDescription("");
      setStatus("");

      alert("Tarefa cadastrada com sucesso!");
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
          <Header title="Tarefa" on_button={false} />

          <div className={styles.divForm}>
            <form onSubmit={handleCreateUsuario}>
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
                  value="Enviar"
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
