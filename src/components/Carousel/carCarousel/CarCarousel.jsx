import React, { useState, useEffect, useRef } from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import CarCarouselHeading from "./CarCarouselHeading";
import styles from "./CarCarousel.module.css";
import FilterCars from "./FilterCars";
import CarsCard from "../../cards/cars/CarCard";
import useFetch from "../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../api/endpoints";

const CarCarousel = () => {
  const [priceOptionVal, setPriceOptionVal] = useState("");
  const [brandOptionVal, setBrandOptionVal] = useState("");
  const [typeOptionVal, setTypeOptionVal] = useState("");
  const [cars, setCars] = useState([]);

  const priceOptionValRef = useRef(priceOptionVal);
  const carsRef = useRef(cars);

  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.cars}`);

  const priceOptionChange = (val) => {
    setPriceOptionVal(val);
  };

  const brandOptionChange = (val) => {
    setBrandOptionVal(val);
  };

  const typeOptionChange = (val) => {
    setTypeOptionVal(val);
  };

  const sortCarsByPrice = () => {
    if (priceOptionVal.toLowerCase() === "stigende") {
      setCars((prevState) => {
        const newState = prevState.sort(
          (a, b) => parseInt(a.attributes.price) - parseInt(b.attributes.price)
        );
        return [...newState];
      });
    }

    if (priceOptionVal.toLowerCase() === "synkende") {
      setCars((prevState) => {
        const newState = prevState.sort(
          (a, b) => parseInt(b.attributes.price) - parseInt(a.attributes.price)
        );
        return [...newState];
      });
    }

    console.log(cars);
  };

  useEffect(() => {
    if (data) {
      setCars([...data.data]);
    }
  }, [data]);

  useEffect(() => {
    sortCarsByPrice();
  }, [priceOptionVal]);

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <CarCarouselHeading />
        <FilterCars
          onPriceOptionChange={priceOptionChange}
          onBrandOptionChange={brandOptionChange}
          onTypeOptionChange={typeOptionChange}
        />
      </div>
      <Carousel>
        {data &&
          cars.map((car) => {
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
