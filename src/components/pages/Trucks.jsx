import React from "react";
import Heading from "../ui/heading/Heading";
import RadioButtonsCars from "../ui/radioButton/RadioButtonsCars";
import CarCard from "../cards/cars/CarCard";
import styles from "./Cars.module.css";
import useFetch from "../../hooks/useFetch";
import API_CONSTANT_MAP from "../../api/endpoints";

const Trucks = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.cars}`);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Heading mainHeading>VAREBIL</Heading>
        <form className={styles["radio-form"]} action="">
          <RadioButtonsCars />
        </form>
        <div className={styles["cars-container"]}>
          {data &&
            data.data.map((car) => {
              return (
                <CarCard
                  key={car.id}
                  single
                  carImg={car.attributes.image}
                  carBrand={car.attributes.brand + " " + car.id + "nr"}
                  carPrice={`Fra ${car.attributes.price}kr/per dag`}
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
