import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import CarCarouselHeading from "./CarCarouselHeading";
import styles from "./CarCarousel.module.css";
import FilterCars from "./FilterCars";
import CarsCard from "../../cards/cars/CarCard";
import useFetch from "../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../api/endpoints";

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
                  carImg={car.attributes.image}
                  carBrand={car.attributes.brand + " " + car.id + "nr"}
                  carPrice={`Fra ${car.attributes.price}kr/per dag`}
                  id={car.id}
                />
              </SwiperSlide>
            );
          })}
        {loading && "Loading..."}
        {err && "Error..."}
      </Carousel>
    </div>
  );
};

export default CarCarousel;
