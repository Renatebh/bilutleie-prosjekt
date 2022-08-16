import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const FooterLinks = () => {
  return (
    <div className={styles["links-container"]}>
      <p className={styles.info}>Info</p>
      <nav>
        <ul className={styles["links-list"]}>
          <li>
            <Link className={styles["router-links"]} to="/contact">
              Kontakt oss
            </Link>
          </li>
          <li>
            <Link className={styles["router-links"]} to="/trucks">
              Varebil
            </Link>
          </li>
          <li>
            <Link className={styles["router-links"]} to="/cars">
              Personbil
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterLinks;
