import React from "react";

import styles from "./styles.module.css";
import Button from "../Button";

interface TaskProps {
  title: string;
  on_button?: boolean;
}

export default function Task({ title, on_button }: TaskProps) {
  return (
    <>
      <div className={styles.divTitle}>
        <h1> {title} </h1>
        {on_button ? (
          <a href="./create" className={styles.link}>
            <Button title="Adicionar" />
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
