import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import Heading from "../../ui/heading/Heading";
import styles from "./CarCarousel.module.css";
import HyondaiSuv from "../../../assets/cars/hyondai-suv.webp";
import FilterCars from "./FilterCars";
import CarsCard from "../../cards/cars/CarCard";
import useFetch from "../../../hooks/useFetch";

const endPoint = "api/headings/2";

const CarCarousel = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <>
      <div className={styles["header-container"]}>
        {data && <Heading>{data.data.attributes.heading}</Heading>}
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
