import React from "react";
import styles from "../buttons/ButtonLarge.module.css";
import { Link } from "react-router-dom";

const LinkLarge = ({ children, id }) => {
  return (
    <Link to={`/order-car/${id}`} className={styles.btn}>
      {children}
    </Link>
  );
};

export default LinkLarge;
