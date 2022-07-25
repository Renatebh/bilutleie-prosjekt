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
        <h2 className={styles.header}>Bestill en bil som passer for deg</h2>
        <FilterCars />
      </div>
      <Carousel>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
            <div className={styles["btn-container"]}>
              <button className={styles["btn"]}>Les mer</button>
              <button className={styles["btn"]}>Bestill</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
            <div className={styles["btn-container"]}>
              <button className={styles["btn"]}>Les mer</button>
              <button className={styles["btn"]}>Bestill</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
            <div className={styles["btn-container"]}>
              <button className={styles["btn"]}>Les mer</button>
              <button className={styles["btn"]}>Bestill</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
            <div className={styles["btn-container"]}>
              <button className={styles["btn"]}>Les mer</button>
              <button className={styles["btn"]}>Bestill</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
            <div className={styles["btn-container"]}>
              <button className={styles["btn"]}>Les mer</button>
              <button className={styles["btn"]}>Bestill</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <img src={HyondaiSuv} alt="" className={styles.image} />
            <p className={styles.brand}>Hyondai 4x4</p>
            <div className={styles["btn-container"]}>
              <button className={styles["btn"]}>Les mer</button>
              <button className={styles["btn"]}>Bestill</button>
            </div>
          </div>
        </SwiperSlide>
      </Carousel>
    </>
  );
};

export default CarCarousel;
