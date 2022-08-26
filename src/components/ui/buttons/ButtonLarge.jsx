import React from "react";
import styles from "./ButtonLarge.module.css";

const ButtonLarge = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default ButtonLarge;
