import React from "react";
import Heading from "../../ui/heading/Heading";
import styles from "./Reviews.module.css";
import useFetch from "../../../hooks/useFetch";
import Review from "./Review";
import API_CONSTANT_MAP from "../../../api/endpoints";

const Reviews = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.headings}/5`);

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        {data && <Heading>{data.data.attributes.heading}</Heading>}
        {loading && "Loading..."}
        {err && "Error..."}
      </div>
      <Review />
    </div>
  );
};

export default Reviews;
