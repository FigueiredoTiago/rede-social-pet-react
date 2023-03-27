import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, error, control }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} name={name} className={styles.input} type={type} {...control} />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input;
