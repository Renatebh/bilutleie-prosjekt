import React, { useState, useRef } from "react";
import styles from "../pages/ContactUs.module.css";
import HeadingWhite from "../ui/heading/HeadingWhite";
import FormInput from "./FormInput";
import inputs from "./Inputs";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71a8nyk",
        "template_ikes88n",
        form.current,
        "L8eMnQJI7AgUp7gP4"
      )
      .then(
        (result) => {
          console.log(result.text, "Email sent");
          alert("Meldingen er sendt!");
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };

  // console.log(values);

  return (
    <form ref={form} onSubmit={sendEmail} className={styles["contact-form"]}>
      <HeadingWhite mainHeadingWhite>Kontakt oss i dag!</HeadingWhite>
      {inputs.map((input) => {
        return (
          <FormInput
            className={styles["form-input"]}
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        );
      })}

      <textarea
        name="message"
        // type="text"
        placeholder="Melding"
        cols={15}
        rows={5}
        className={styles["form-input"]}
      ></textarea>

      <input
        type="submit"
        value="Send Melding"
        className={styles["form-btn"]}
        onSubmit={sendEmail}
      />
    </form>
  );
};

export default ContactUsForm;
