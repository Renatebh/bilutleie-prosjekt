import React from "react";
import styles from "./Reviews.module.css";
import { SwiperSlide } from "swiper/react";
import Carousel from "../Carousel";
import useFetch from "../../../hooks/useFetch";

const endPoint = "api/reviews";

const Review = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <Carousel>
      {!data ? (
        <p>Data does not exist</p>
      ) : (
        data.data.map((review) => {
          return (
            <SwiperSlide className={styles["swiper-slide"]} key={review.id}>
              <div className={styles["card-container"]}>
                <p className={styles.review}>{review.attributes.review}</p>
                <p className={styles.name}>{review.attributes.name}</p>
              </div>
            </SwiperSlide>
          );
        })
      )}
    </Carousel>
  );
};

export default Review;
