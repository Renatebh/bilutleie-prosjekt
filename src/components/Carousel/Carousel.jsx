import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./Carousel.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = ({ children }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={styles["carousel-container"]}>
      <Swiper
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          468: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1650: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop
        modules={[Navigation]}
        className={styles.swiper}
      >
        {children}
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

export default Carousel;
