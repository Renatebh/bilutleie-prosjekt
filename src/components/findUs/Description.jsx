import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import styles from "./Description.module.css";
import useFetch from "../../hooks/useFetch";
import API_CONSTANT_MAP from "../../api/endpoints";

const endPoint = "api/find-us";

const Description = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.findUS}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <div className={styles.container}>
      <HeadingWhite>{data.data.attributes.heading}</HeadingWhite>
      <p className={styles.text}>{data.data.attributes.content}</p>
      <br />
      <p className={styles.text}>{data.data.attributes.second}</p>
    </div>
  );
};

export default Description;
