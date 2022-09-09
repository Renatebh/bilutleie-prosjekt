import React from "react";
import styles from "./ButtonLarge.module.css";
import { Link } from "react-router-dom";

const ButtonLarge = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default ButtonLarge;
