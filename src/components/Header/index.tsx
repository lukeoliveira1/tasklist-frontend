import React from "react";

import styles from "./styles.module.css";
import Button from "../Button";
import Link from "next/link";

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
          <Link href="./create" className={styles.link}>
            <Button title="Adicionar" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
