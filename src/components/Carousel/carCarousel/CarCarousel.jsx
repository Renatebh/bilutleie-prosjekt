import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import Heading from "../../ui/heading/Heading";
import styles from "./CarCarousel.module.css";
import HyondaiSuv from "../../../assets/cars/hyondai-suv.webp";
import FilterCars from "./FilterCars";
import CarsCard from "../../cards/cars/CarCard";

const CarCarousel = () => {
  return (
    <>
      <div className={styles["header-container"]}>
        <Heading>Bestill en bil som passer for deg</Heading>
        <FilterCars />
      </div>
      <Carousel>
        <SwiperSlide className={styles["swiper-slide"]}>
          <CarsCard
            carImg={HyondaiSuv}
            carBrand={"Hyondai 4x4"}
            carPrice="Fra 360 kr/per dag"
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <CarsCard
            carImg={HyondaiSuv}
            carBrand={"Hyondai 4x4"}
            carPrice="Fra 360 kr/per dag"
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <CarsCard
            carImg={HyondaiSuv}
            carBrand={"Hyondai 4x4"}
            carPrice="Fra 360 kr/per dag"
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <CarsCard
            carImg={HyondaiSuv}
            carBrand={"Hyondai 4x4"}
            carPrice="Fra 360 kr/per dag"
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <CarsCard
            carImg={HyondaiSuv}
            carBrand={"Hyondai 4x4"}
            carPrice="Fra 360 kr/per dag"
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <CarsCard
            carImg={HyondaiSuv}
            carBrand={"Hyondai 4x4"}
            carPrice="Fra 360 kr/per dag"
          />
        </SwiperSlide>
      </Carousel>
    </>
  );
};

export default CarCarousel;
