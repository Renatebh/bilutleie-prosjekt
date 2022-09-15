import React, { useState, useEffect } from "react";
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
  const [typeOptionVal, setTypeOptionVal] = useState("");
  const [cars, setCars] = useState([]);

  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.cars}`);

  const priceOptionChange = (val) => {
    setPriceOptionVal(val);
  };

  const brandOptionChange = (val) => {
    sortCarsByBrand(val);
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
  };

  const sortCarsByBrand = (val) => {
    if (
      priceOptionVal.toLowerCase() !== "stigende" &&
      priceOptionVal.toLowerCase() !== "synkende" &&
      val.toLowerCase() === "alle"
    ) {
      const filteredCars = data.data.map((car) => car);
      setCars(filteredCars);
      return;
    }

    if (
      priceOptionVal.toLowerCase() !== "stigende" &&
      priceOptionVal.toLowerCase() !== "synkende"
    ) {
      const filteredCars = data.data.filter(
        (car) => car.attributes.brand.trim().toLowerCase() === val.toLowerCase()
      );
      setCars(filteredCars);
      return;
    }

    sortCarsByPrice();

    if (val.toLowerCase() === "alle") {
      const filteredCars = data.data.map((car) => car);
      setCars(filteredCars);
      sortCarsByPrice();
      return;
    }

    setCars((prevState) =>
      prevState.filter((car) => {
        return car.attributes.brand.trim().toLowerCase() === val.toLowerCase();
      })
    );
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
        {cars &&
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
