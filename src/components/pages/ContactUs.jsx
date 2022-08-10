import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import Heading from "../ui/heading/Heading";
import styles from "./Test.module.css";
import FindUs from "../findUs/FindUs";
import OpeningHours from "../footer/OpeneningHours";
import Contact from "../footer/Contact";

export const ContactUs = () => {
  return (
    <>
      <main className={styles["main-contact"]}>
        <div className={styles["contact-container"]}>
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

          <div className={styles["contact-text"]}>
            <Heading>
              Kontakt oss i dag for en hyggelig prat og ett pristilbud.
            </Heading>
            <p>
              Ring oss gjerne på eller kom innom vårt kontor. Vi holder til
              sentralt i Oslo med buss og trikkestopp rett ett ved. Ta gjerne
              kontakt med oss uten om kontortiden også. Vi hjelper deg så godt
              vi kan. Har du spørsmål ang bilutleie og våre biler, <br />
              ring oss på &nbsp;
              <a href="tel:0123456789" className={styles.phone}>
                22 00 22 00
              </a>
              &nbsp; i dag.
            </p>
          </div>

          <div className={styles["contact-info"]}>
            <Contact />
            <OpeningHours />
          </div>
        </div>

        <FindUs />
      </main>
    </>
  );
};

export default ContactUs;
