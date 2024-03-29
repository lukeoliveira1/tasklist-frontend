import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";
import { deleteTask } from "@/api/task/delete";
import { useRouter } from "next/router";
import { TaskForm } from "@/types/task";
import Link from "next/link";

export default function Task({ taskId, title, description, status }: TaskForm) {
  const router = useRouter();

  function handleClickEdit() {
    router.push(`./${taskId}`);
  }

  async function handleClickDelete() {
    try {
      const confirmed = window.confirm(
        "Tem certeza que deseja excluir esta tarefa?"
      );
      if (confirmed) {
        await deleteTask(Number(taskId));
        alert("Tarefa excluída com sucesso!");
        window.location.reload();
      }
    } catch (error) {
      alert(error);
    } finally {
      window.location.reload();
    }
  }

  return (
    <>
      <div className={styles.divTask}>
        <div className={styles.divMain}>
          <div className={styles.divTitle}>
            <h3>{title}</h3>
            <span style={{ margin: "0 10px" }}>-</span>
            <h3>{status}</h3>
          </div>
          <p>{description}</p>
        </div>

        <div className={styles.divIcons}>
          <a href="#" onClick={handleClickEdit} className={styles.link}>
            <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          </a>
          <a href="#" onClick={handleClickDelete} className={styles.link}>
            <FontAwesomeIcon icon={faTrash} size="lg" />
          </a>
        </div>
      </div>
    </>
  );
}
