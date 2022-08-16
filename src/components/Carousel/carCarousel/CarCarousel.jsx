import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import CarCarouselHeading from "./CarCarouselHeading";
import styles from "./CarCarousel.module.css";
import FilterCars from "./FilterCars";
import CarsCard from "../../cards/cars/CarCard";
import useFetch from "../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../api/endpoints";

const url = import.meta.env.VITE_API_URL;

const CarCarousel = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.cars}`);

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <CarCarouselHeading />
        <FilterCars />
      </div>
      <Carousel>
        {data &&
          data.data.map((car) => {
            return (
              <SwiperSlide className={styles["swiper-slide"]} key={car.id}>
                <CarsCard
                  carImg={`${url}${car.attributes.image.data[0].attributes.url}`}
                  carBrand={car.attributes.brand + " " + car.id + "nr"}
                  carPrice={car.attributes.price}
                />
              </SwiperSlide>
            );
          })}
      </Carousel>
    </div>
  );
};

export default CarCarousel;
