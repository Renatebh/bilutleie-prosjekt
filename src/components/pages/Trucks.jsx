import React from "react";
import Heading from "../ui/heading/Heading";
import RadioButtons from "../ui/radioButtons/RadioButtons";
import CarCard from "../cards/cars/CarCard";
import Hyondai from "../../assets/cars/hyondai-suv.webp";
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
          <RadioButtons
            radioValue="alle-varebil"
            radioName="varebil"
            labelValue="alle-varebil"
          >
            ALLE TYPER
          </RadioButtons>
          <RadioButtons
            radioValue="elbil-varebil"
            radioName="varebil"
            labelValue="elbil-varebil"
          >
            El-bil
          </RadioButtons>
          <RadioButtons
            radioValue="bensin-varebil"
            radioName="varebil"
            labelValue="bensin-varebil"
          >
            Bensin
          </RadioButtons>
          <RadioButtons
            radioValue="diesel-varebil"
            radioName="varebil"
            labelValue="diesel-varebil"
          >
            Diesel
          </RadioButtons>
          <RadioButtons
            radioValue="manuell-varebil"
            radioName="varebil"
            labelValue="manuell-varebil"
          >
            Manuell
          </RadioButtons>
          <RadioButtons
            radioValue="automat-varebil"
            radioName="varebil"
            labelValue="automat-varebil"
          >
            Automat
          </RadioButtons>
          <RadioButtons
            radioValue="4x4-varebil"
            radioName="varebil"
            labelValue="4x4-varebil"
          >
            4x4
          </RadioButtons>
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
