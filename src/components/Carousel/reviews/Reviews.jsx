import React from "react";
import Heading from "../../ui/heading/Heading";
import styles from "./Reviews.module.css";
import useFetch from "../../../hooks/useFetch";
import Review from "./Review";

const endPoint = "api/headings/5";

const Reviews = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        {data && <Heading>{data.data.attributes.heading}</Heading>}
      </div>
      <Review />
    </div>
  );
};

export default Reviews;
