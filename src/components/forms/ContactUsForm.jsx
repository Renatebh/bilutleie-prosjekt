import React from "react";
import styles from "../pages/ContactUs.module.css";
import HeadingWhite from "../ui/heading/HeadingWhite";

const ContactUsForm = () => {
  return (
    <form className={styles["contact-form"]}>
      <HeadingWhite mainHeadingWhite>Kontakt oss i dag!</HeadingWhite>
      <input
        type="text"
        name="name"
        placeholder="Navn"
        className={styles["form-input"]}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className={styles["form-input"]}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        className={styles["form-input"]}
      />
      <textarea
        type="text"
        placeholder="Melding"
        className={styles["form-input"]}
      />

      <input type="button" value="Send" className={styles["form-btn"]} />
    </form>
  );
};

export default ContactUsForm;
