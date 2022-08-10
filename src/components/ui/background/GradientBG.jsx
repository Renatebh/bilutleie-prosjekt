import React from "react";
import styles from "./GradientBG.module.css";

const GradientBG = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default GradientBG;
