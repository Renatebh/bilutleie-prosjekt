import React from "react";
import useFetch from "../../../hooks/useFetch";
import Heading from "../../ui/heading/Heading";
import styles from "./Cards.module.css";
import API_CONSTANT_MAP from "../../../api/endpoints";

const CardHeading = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.headings}/1`);

  return (
    <div className={styles.header}>
      {data && <Heading mainHeading>{data.data.attributes.heading}</Heading>}
      {loading && "Loading..."}
      {err && "Error..."}
    </div>
  );
};

export default CardHeading;
