import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import styles from "./SingleCarSlider.module.css";
import HyondaiSuv from "../../../assets/cars/hyondai-suv.webp";

const SingleCarSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={10}
        navigation={true}
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
        className={styles.mySwiper}
      >
        <SwiperSlide key="1">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide key="2">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide key="3">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide key="4">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide key="5">
          <img src={HyondaiSuv} />
        </SwiperSlide>
        <SwiperSlide key="6">
          <img src={HyondaiSuv} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SingleCarSlider;
