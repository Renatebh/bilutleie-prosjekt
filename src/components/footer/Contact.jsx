import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Footer.module.css";
import ReactMarkdown from "react-markdown";
import API_CONSTANT_MAP from "../../api/endpoints";

const Contact = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.contact}`);

  return (
    <div className={styles["contact-container"]}>
      <p className={styles["company-name"]}>Bilutleie</p>
      <ReactMarkdown className={styles["company-adress"]}>
        {data && data.data.attributes.address}
      </ReactMarkdown>
      <a href="mailto:xyz@abc.com" className={styles.email}>
        {data && data.data.attributes.email}
        {loading && "Loading..."}
        {err && "Error..."}
      </a>
      <br />
      <a href="tel:0123456789" className={styles.phone}>
        {data && data.data.attributes.number}
        {loading && "Loading..."}
        {err && "Error..."}
      </a>
    </div>
  );
};

export default Contact;
