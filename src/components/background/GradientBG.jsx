import React from "react";
import styles from "./GradientBG.module.css";

const GradientBG = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default GradientBG;
