import React from "react";
import styles from "./Reviews.module.css";
import { SwiperSlide } from "swiper/react";
import Carousel from "../Carousel";
import useFetch from "../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../api/endpoints";

const endPoint = "api/reviews";

const Review = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.reviews}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <Carousel>
      {data.data.map((review) => {
        return (
          <SwiperSlide className={styles["swiper-slide"]} key={review.id}>
            <div className={styles["card-container"]}>
              <p className={styles.review}>{review.attributes.review}</p>
              <p className={styles.name}>{review.attributes.name}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
};

export default Review;
