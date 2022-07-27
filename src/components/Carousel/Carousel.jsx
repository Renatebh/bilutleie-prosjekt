import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import styles from "./Carousel.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = ({ children }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["swiper-nav-prev"]} ref={swiperNavPrevRef}>
        <FaArrowCircleLeft className={styles["arrow-left"]} />
      </div>
      <div className={styles["swiper-nav-next"]} ref={swiperNavNextRef}>
        <FaArrowCircleRight className={styles["arrow-right"]} />
      </div>
      <Swiper
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
        }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1125: {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: false,
          },
          1650: {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: false,
          },
        }}
        loop
        modules={[Navigation, Pagination]}
        className={styles.swiper}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
