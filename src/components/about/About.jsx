import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import styles from "./About.module.css";
import Car from "../../assets/campbell-3ZUsNJhi_Ik-unsplash.jpg";
import useFetch from "../../hooks/useFetch";

const endPoint = "api/about";

const About = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        {data && (
          <>
            <HeadingWhite>{data.data.attributes.heading}</HeadingWhite>
            <p className={styles.paragraph}>{data.data.attributes.content}</p>
            <br />
            <p className={styles.paragraph}>{data.data.attributes.content}</p>
          </>
        )}
      </div>
      <div className={styles["img-container"]}>
        <img src={Car} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default About;
