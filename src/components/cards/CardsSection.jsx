import React from "react";
import styles from "./Cards.module.css";
import Cards from "./Cards";
import CardsData from "./CardsData";

const CardsSection = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>Hvorfor velge Bilutleie?</h2>
      </div>
      <div className={styles["cards-container"]}>
        {CardsData.map((val, ind) => {
          return (
            <Cards
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardsSection;
