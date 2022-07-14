import React from "react";
import HeroForm from "./HeroForm";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles["hero-container"]}>
      <HeroForm />
    </div>
  );
};

export default HeroSection;
