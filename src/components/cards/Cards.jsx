import React from "react";
import styles from "../cards/Cards.module.css";

const Cards = (props) => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.icon}>{props.imgsrc}</div>
        <div className={styles["cards-info"]}>
          <h3 className={styles["cards-header"]}>{props.title}</h3>
          <p className={styles["cards-text"]}>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
