import React from "react";
import styles from "./Cards.module.css";
import Cards from "./Cards";
import CardsData from "./CardsData";
import Heading from "../../ui/heading/Heading";
import useFetch from "../../../hooks/useFetch";

const endPoint = "api/headings/1";

const CardsSection = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <>
      <div className={styles.header}>
        {data && <Heading mainHeading>{data.data.attributes.heading}</Heading>}
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
