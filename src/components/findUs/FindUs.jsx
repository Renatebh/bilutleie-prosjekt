import React from "react";
import Description from "./Description";
import Map from "./Map";
import styles from "./FindUs.module.css";

const FindUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Description />
        <Map />
      </div>
    </div>
  );
};

export default FindUs;
