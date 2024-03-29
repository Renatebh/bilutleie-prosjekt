import React from "react";
import styles from "./Select.module.css";

const Select = ({ children, name, id, defaultValue }) => {
  const onfilteredChangeHandler = (e) => {
    onfilteredChange(e.target.id, e.target.value);
  };

  return (
    <select
      // onChange={(e) => onfilteredChangeHandler(e)}
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
