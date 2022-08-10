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
      {data && <HeadingWhite>{data.data.attributes.heading}</HeadingWhite>}
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
        repellendus eaque laborum excepturi non voluptas, qui impedit quia
        quibusdam magni corporis necessitatibus soluta totam animi sequi
        voluptatem nulla aliquid praesentium.
      </p>
      <br />
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
        repellendus eaque laborum excepturi non voluptas, qui impedit quia
        quibusdam magni corporis necessitatibus soluta totam animi sequi
        voluptatem nulla aliquid praesentium.
      </p>
    </div>
  );
};

export default Description;
