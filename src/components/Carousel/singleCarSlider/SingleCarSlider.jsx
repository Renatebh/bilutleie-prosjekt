import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import styles from "./SingleCarSlider.module.css";
import HyondaiSuv from "../../../assets/cars/hyondai-suv.webp";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const SingleCarSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={styles.container}>
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
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        <SwiperSlide>
          <img className={styles.img} src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.img} src={HyondaiSuv} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${styles.mySwiper} mySwiper`}
      >
        <SwiperSlide className={styles["thumb-img"]} key="1">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide className={styles["thumb-img"]} key="2">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide className={styles["thumb-img"]} key="3">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide className={styles["thumb-img"]} key="4">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide className={styles["thumb-img"]} key="5">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide className={styles["thumb-img"]} key="6">
          <img src={HyondaiSuv} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SingleCarSlider;
