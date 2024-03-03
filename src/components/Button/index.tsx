import React from "react";

import styles from "./styles.module.css";

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <>
      <button className={styles.button}>{title}</button>
    </>
  );
}
