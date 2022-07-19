import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const SomeLogoes = () => {
  return (
    <>
      <div className={styles["some-container"]}>
        <FaFacebook size={40} className={styles["some-logo"]} />
        <FaLinkedin size={40} className={styles["some-logo"]} />
        <FaInstagram size={40} className={styles["some-logo"]} />
      </div>
      <div className={styles["copyrights-container"]}>
        <p>&copy; Copyrights 2022</p>
      </div>
    </>
  );
};

export default SomeLogoes;
