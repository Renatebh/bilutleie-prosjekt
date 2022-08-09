import React from "react";
import styles from "./Cards.module.css";
import Cards from "./Cards";
import CardsData from "./CardsData";
import Heading from "../../ui/heading/Heading";

const CardsSection = () => {
  return (
    <>
      <div className={styles.header}>
        <Heading mainHeading>Hvorfor velge bilutleie</Heading>
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
