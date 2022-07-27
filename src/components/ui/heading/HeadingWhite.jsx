import React from "react";
import styles from "./Heading.module.css";

const HeadingWhite = ({ children, mainHeadingWhite }) => {
  const headingOne = mainHeadingWhite;

  return headingOne ? (
    <h1 className={styles["heading-white"]}>{children}</h1>
  ) : (
    <h2 className={styles["heading-white"]}>{children}</h2>
  );
};

export default HeadingWhite;
