import React from "react";
import styles from "./Footer.module.css";

const Contact = () => {
  return (
    <div className={styles["contact-container"]}>
      <p className={styles["company-name"]}>Bilutleie</p>
      <p className={styles["company-adress"]}>
        Osloveien 22 <br />
        2200 Oslo
      </p>
      <a href="mailto:xyz@abc.com" className={styles.email}>
        bilutleie@email.no
      </a>
      <br />
      <a href="tel:0123456789" className={styles.phone}>
        22 00 22 00
      </a>
    </div>
  );
};

export default Contact;
