import React from "react";
import styles from "./DatePicker.module.css";

const DatePicker = ({ children, id, name }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
      <input
        className={styles.input}
        type="datetime-local"
        id={id}
        name={name}
        min="2022-07-08T07:30"
        max="2024-12-31T16:00"
      />
    </>
  );
};

export default DatePicker;
