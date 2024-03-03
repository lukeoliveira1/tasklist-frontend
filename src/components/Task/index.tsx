import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

interface TaskProps {
  title: string;
  description?: string;
  status: string;
}

export default function Task({ title, description, status }: TaskProps) {
  function handleClickEdit() {
    console.log("Ícone clicado");
  }
  function handleClickDelete() {
    console.log("Ícone clicado");
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
