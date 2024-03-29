import React from "react";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import styles from "./HeroText.module.css";
import API_CONSTANT_MAP from "../../api/endpoints";

const HeroText = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.hero}`);

  return (
    <div className={styles["hero-text-wrapper"]}>
      {data && (
        <>
          <h1 className={styles.heading}>{data.data.attributes.main}</h1>
          <ReactMarkdown className={styles.paragraph}>
            {data.data.attributes.secondary}
          </ReactMarkdown>
        </>
      )}
      {loading && (
        <div className={styles.loading}>
          <p>"Loading..."</p>
        </div>
      )}
      {err && "Error..."}
    </div>
  );
};

export default HeroText;
