import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import styles from "./CarCarousel.module.css";
import HyondaiSuv from "../../../assets/cars/hyondai-suv.webp";
import FilterCars from "./FilterCars";

const CarCarousel = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <h3 className={styles.header}>Bestill en bil som passer for deg</h3>
        <FilterCars />
      </div>
      <Carousel>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
      </Carousel>
    </>
  );
};

export default CarCarousel;
