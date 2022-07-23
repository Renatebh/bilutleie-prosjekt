import React from "react";
import styles from "./Footer.module.css";

const FooterLinks = () => {
  return (
    <div className={styles["links-container"]}>
      <p className={styles.info}>Info</p>
      <nav>
        <ul className={styles["links-list"]}>
          <li>Kontakt oss</li>
          <li>Priser</li>
          <li>Varebil</li>
          <li>Personbil</li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterLinks;
