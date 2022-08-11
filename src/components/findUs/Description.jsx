import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import styles from "./Description.module.css";
import useFetch from "../../hooks/useFetch";

const endPoint = "api/find-us";

const Description = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div className={styles.container}>
      {data && (
        <>
          <HeadingWhite>{data.data.attributes.heading}</HeadingWhite>
          <p className={styles.text}>{data.data.attributes.content}</p>
          <br />
          <p className={styles.text}>{data.data.attributes.second}</p>
        </>
      )}
    </div>
  );
};

export default Description;
