import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import Heading from "../ui/heading/Heading";
import styles from "./Test.module.css";

export const ContactUs = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["contact-container"]}>
          <form className={styles["contact-form"]}>
            <HeadingWhite mainHeadingWhite>Kontakt oss i dag!</HeadingWhite>
            <input
              type="text"
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
            <input
              type="text"
              placeholder="Melding"
              className={styles["form-input"]}
            />

            <input type="button" value="Send" className={styles["form-btn"]} />
          </form>

          <div className={styles["contact-text"]}>
            <Heading>
              Kontakt oss i dag for en hyggelig prat og ett pristilbud.
            </Heading>
            <p>
              Ring oss gjerne på eller kom innom vårt kontor. Vi holder til
              sentralt i Oslo med buss og trikkestopp rett ett ved. Ta gjerne
              kontakt med oss uten om kontortiden også. Vi hjelper deg så godt
              vi kan. Har du spørsmål ang bilutleie og våre biler, ring oss på
              22 00 22 00 i dag.{" "}
            </p>

            <div className={styles["contact-info"]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
