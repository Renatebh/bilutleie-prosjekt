import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import styles from "./Description.module.css";
import useFetch from "../../hooks/useFetch";
import API_CONSTANT_MAP from "../../api/endpoints";

const Description = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.findUS}`);

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
      {loading && (
        <div className={styles.container}>
          <p>"Loading..."</p>
        </div>
      )}
      {err && "Error..."}
    </div>
  );
};

export default Description;
