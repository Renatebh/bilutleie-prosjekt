import React from "react";
import Heading from "../ui/heading/Heading";
import RadioButtonsCars from "../ui/radioButtons/RadioButtonsCars";
import CarCard from "../cards/cars/CarCard";
import styles from "./Cars.module.css";
import useFetch from "../../hooks/useFetch";

const endPoint = "api/cars?populate=*";
const url = import.meta.env.VITE_API_URL;

const Cars = () => {
  const { loading, err, data } = useFetch(`${url}/${endPoint}`);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Heading mainHeading>PERSONBIL</Heading>
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
                  carImg={`${url}${car.attributes.image.data[0].attributes.url}`}
                  carBrand={car.attributes.brand + " " + car.id + "nr"}
                  carPrice={car.attributes.price}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cars;
