import React from "react";
import styles from "./Select.module.css";

const Select = ({ children, name, id, defaultValue }) => {
  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      className={styles.select}
    >
      {children}
    </select>
  );
};

export default Select;
