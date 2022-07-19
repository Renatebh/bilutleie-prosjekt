import React from "react";
import styles from "./Footer.module.css";

const FooterLinks = () => {
  return (
    <div className={styles["links-container"]}>
      <p className={styles.info}>Info</p>
      <ul className={styles["links-list"]}>
        <li>Kontakt oss</li>
        <li>Priser</li>
        <li>Varebil</li>
        <li>Personbil</li>
      </ul>
    </div>
  );
};

export default FooterLinks;
