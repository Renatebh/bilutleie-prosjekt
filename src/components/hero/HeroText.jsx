import React from "react";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import styles from "./HeroText.module.css";
import API_CONSTANT_MAP from "../../api/endpoints";

const HeroText = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.hero}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <div>
      <h1 className={styles.heading}>{data.data.attributes.main}</h1>
      <ReactMarkdown className={styles.paragraph}>
        {data.data.attributes.secondary}
      </ReactMarkdown>
    </div>
  );
};

export default HeroText;
