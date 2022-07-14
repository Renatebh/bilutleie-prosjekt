import React from "react";
import styles from "./HeroText.module.css";

const HeroText = () => {
  return (
    <div>
      <h1 className={styles.heading}>Leie bil i Oslo?</h1>
      <p className={styles.paragraph}>Vi har mange typer og</p>
      <p className={styles.paragraph}>modeller til leie..</p>
    </div>
  );
};

export default HeroText;
