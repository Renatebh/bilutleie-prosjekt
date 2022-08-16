import React from "react";
import Heading from "../ui/heading/Heading";
import RadioButton from "../ui/radioButton/RadioButton";
import CarCard from "../cards/cars/CarCard";
import styles from "./Cars.module.css";
import useFetch from "../../hooks/useFetch";

const endPoint = "api/cars?populate=*";
const url = import.meta.env.VITE_API_URL;

const Trucks = () => {
  const { loading, err, data } = useFetch(`${url}/${endPoint}`);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Heading mainHeading>VAREBIL</Heading>
        <form className={styles["radio-form"]} action="">
          <RadioButton
            radioValue="alle-varebil"
            radioName="varebil"
            labelValue="alle-varebil"
          >
            ALLE TYPER
          </RadioButton>
          <RadioButton
            radioValue="elbil-varebil"
            radioName="varebil"
            labelValue="elbil-varebil"
          >
            El-bil
          </RadioButton>
          <RadioButton
            radioValue="bensin-varebil"
            radioName="varebil"
            labelValue="bensin-varebil"
          >
            Bensin
          </RadioButton>
          <RadioButton
            radioValue="diesel-varebil"
            radioName="varebil"
            labelValue="diesel-varebil"
          >
            Diesel
          </RadioButton>
          <RadioButton
            radioValue="manuell-varebil"
            radioName="varebil"
            labelValue="manuell-varebil"
          >
            Manuell
          </RadioButton>
          <RadioButton
            radioValue="automat-varebil"
            radioName="varebil"
            labelValue="automat-varebil"
          >
            Automat
          </RadioButton>
          <RadioButton
            radioValue="4x4-varebil"
            radioName="varebil"
            labelValue="4x4-varebil"
          >
            4x4
          </RadioButton>
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

export default Trucks;
