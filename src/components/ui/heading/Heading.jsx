import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ children, mainHeading }) => {
  const headingOne = mainHeading;

  return headingOne ? (
    <h1 className={styles.heading}>{children}</h1>
  ) : (
    <h2 className={styles.heading}>{children}</h2>
  );
};

export default Heading;
