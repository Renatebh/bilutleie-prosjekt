import React from "react";
import Heading from "../ui/heading/Heading";
import styles from "./ContactUs.module.css";
import FindUs from "../findUs/FindUs";
import OpeningHours from "../footer/OpeneningHours";
import Contact from "../footer/Contact";
import ContactUsForm from "../forms/ContactUsForm";

export const ContactUs = () => {
  return (
    <>
      <main className={styles["main-contact"]}>
        <div className={styles["contact-container"]}>
          <div className={styles.wrapper}>
            <ContactUsForm />

            <div className={styles["contact-text"]}>
              <Heading>
                Kontakt oss i dag for en hyggelig prat og ett pristilbud.
              </Heading>
              <p>
                Ring oss gjerne eller kom innom vårt kontor. Vi holder til
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
        </div>
        <FindUs />
      </main>
    </>
  );
};

export default ContactUs;
