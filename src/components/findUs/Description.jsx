import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.container}>
      <HeadingWhite>Hvordan finner du vårt firma?</HeadingWhite>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium Lorem ipsum dolor sit amet consectetur
        <br />
        <br />
        adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
        repudiandae consequuntur voluptatum laborum numquam blanditiis harum
        quisquam eius sed odit fugiat iusto fuga praesentium
      </p>
    </div>
  );
};

export default Description;
