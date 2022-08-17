import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import Heading from "../ui/heading/Heading";
import styles from "./Test.module.css";
import FindUs from "../findUs/FindUs";
import OpeningHours from "../footer/OpeneningHours";
import Contact from "../footer/Contact";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1r2skax",
        "template_riwmm92",
        form.current,
        "L8eMnQJI7AgUp7gP4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
          if (email == "") {
            alert("Email is required");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9+-]+\.[a-z]{2,8}(.[a-z{2-8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is valid");
    } else if (!regEx.test(email) && email == "") {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <main className={styles["main-contact"]}>
        <div className={styles["contact-container"]}>
          <form
            className={styles["contact-form"]}
            ref={form}
            onSubmit={sendEmail}
          >
            <HeadingWhite mainHeadingWhite>Kontakt oss i dag!</HeadingWhite>
            <input
              type="text"
              name="user_name"
              placeholder="Navn"
              className={styles["form-input"]}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={email}
              onChange={handleOnChange}
              className={styles["form-input"]}
              required
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="Telefon"
              className={styles["form-input"]}
              required
            />
            <textarea
              type="text"
              name="message"
              rows={6}
              placeholder="Melding"
              className={styles["form-input"]}
              required
            />

            <input
              type="submit"
              value="Send"
              className={styles["form-btn"]}
              onClick={emailValidation}
            />
            {message}
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
