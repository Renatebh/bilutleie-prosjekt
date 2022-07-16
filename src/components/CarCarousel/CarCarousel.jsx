import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./CarCarousel.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const CarCarousel = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={styles["carousel-container"]}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        slidesPerView={4}
        spaceBetween={30}
        loop
        className={styles.swiper}
      >
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 8</SwiperSlide>
        <div className={styles["swiper-nav-prev"]} ref={swiperNavPrevRef}>
          <FaArrowCircleLeft className={styles["arrow-left"]} />
        </div>
        <div className={styles["swiper-nav-next"]} ref={swiperNavNextRef}>
          <FaArrowCircleRight className={styles["arrow-right"]} />
        </div>
      </Swiper>
    </div>
  );
};

export default CarCarousel;
