import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ children, name, id }) => {
  return (
    <>
      <input className={styles.checkbox} type="checkbox" name={name} id={id} />
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </>
  );
};

export default Checkbox;
