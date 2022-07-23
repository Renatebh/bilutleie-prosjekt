import React from "react";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Hvordan finner du vårt firma?</h4>
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
