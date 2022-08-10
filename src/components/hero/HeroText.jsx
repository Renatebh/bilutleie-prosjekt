import React from "react";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import styles from "./HeroText.module.css";

const endPoint = "api/hero";

const HeroText = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div>
      {data && (
        <>
          <h1 className={styles.heading}>{data.data.attributes.main}</h1>
          <ReactMarkdown className={styles.paragraph}>
            {data.data.attributes.secondary}
          </ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default HeroText;
