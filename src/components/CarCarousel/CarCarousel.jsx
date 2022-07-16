import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./CarCarousel.module.css";

const CarCarousel = () => {
  return (
    <div className={styles["carousel-container"]}>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={4}
        spaceBetween={30}
        loop
        className={styles.swiper}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 8</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarCarousel;
