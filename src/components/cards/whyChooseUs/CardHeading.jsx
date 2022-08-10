import React from "react";
import useFetch from "../../../hooks/useFetch";
import Heading from "../../ui/heading/Heading";
import styles from "./Cards.module.css";

const endPoint = "api/headings/1";

const CardHeading = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div className={styles.header}>
      {data && <Heading mainHeading>{data.data.attributes.heading}</Heading>}
    </div>
  );
};

export default CardHeading;
