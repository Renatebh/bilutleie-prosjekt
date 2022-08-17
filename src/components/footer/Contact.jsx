import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Footer.module.css";
import ReactMarkdown from "react-markdown";
import API_CONSTANT_MAP from "../../api/endpoints";

const endPoint = "api/contact";

const Contact = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.contact}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <div className={styles["contact-container"]}>
      <p className={styles["company-name"]}>Bilutleie</p>
      <ReactMarkdown className={styles["company-adress"]}>
        {data.data.attributes.address}
      </ReactMarkdown>
      <a href="mailto:xyz@abc.com" className={styles.email}>
        {data.data.attributes.email}
      </a>
      <br />
      <a href="tel:0123456789" className={styles.phone}>
        {data.data.attributes.number}
      </a>
    </div>
  );
};

export default Contact;
