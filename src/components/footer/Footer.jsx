import React from "react";
import Contact from "./Contact";
import OpeneningHours from "./OpeneningHours";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";
import SomeLogoes from "./SomeLogoes";

const Footer = () => {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-top"]}>
          <Contact />
          <OpeneningHours />
          <FooterLinks />
        </div>
        <SomeLogoes />
      </div>
    </footer>
  );
};

export default Footer;
