import React, { useState, useEffect } from "react";
import Heading from "../ui/heading/Heading";
import RadioButtonsCars from "../ui/radioButton/RadioButtonsCars";
import CarCard from "../cards/cars/CarCard";
import styles from "./Cars.module.css";
import useFetch from "../../hooks/useFetch";
import API_CONSTANT_MAP from "../../api/endpoints";

const Trucks = () => {
  const [cars, setCars] = useState([]);
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.cars}`);

  const onRadioBtnClick = (val) => {
    sortCarsByType(val);
  };

  const sortCarsByType = (val) => {
    if (val.toLowerCase() === "alle typer") {
      const filteredCars = data.data.map((car) => car);
      setCars(filteredCars);
      return;
    }

    const filteredCars = data.data.filter((car) => {
      return (
        car.attributes.categories.data[0].attributes.title
          .trim()
          .toLowerCase() === val.trim().toLowerCase()
      );
    });

    setCars(filteredCars);
  };

  useEffect(() => {
    if (data) {
      setCars([...data.data]);
    }
  }, [data]);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Heading mainHeading>VAREBIL</Heading>
        <form className={styles["radio-form"]} action="">
          <RadioButtonsCars onRadioBtnClick={onRadioBtnClick} />
        </form>
        <div className={styles["cars-container"]}>
          {data &&
            cars.map((car) => {
              return (
                <CarCard
                  key={car.id}
                  single
                  carImg={car.attributes.image}
                  carBrand={car.attributes.brand + " " + car.id + "nr"}
                  carPrice={`Fra ${car.attributes.price}kr/per dag`}
                  id={car.id}
                />
              );
            })}
          {loading && "Loading..."}
          {err && "Error..."}
        </div>
      </div>
    </main>
  );
};

export default Trucks;
