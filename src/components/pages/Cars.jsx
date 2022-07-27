import React from "react";
import Heading from "../ui/heading/Heading";
import RadioButtons from "../ui/radioButtons/RadioButtons";
import CarCard from "../cards/cars/CarCard";
import Hyondai from "../../assets/cars/hyondai-suv.webp";
import styles from "./Test.module.css";

const Cars = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Heading mainHeading>PERSONBIL</Heading>
        <form className={styles["radio-form"]} action="">
          <RadioButtons
            radioValue="alle-person"
            radioName="personbil"
            labelValue="alle-person"
          >
            ALLE TYPER
          </RadioButtons>
          <RadioButtons
            radioValue="elbil-person"
            radioName="personbil"
            labelValue="elbil-person"
          >
            El-bil
          </RadioButtons>
          <RadioButtons
            radioValue="bensin-person"
            radioName="personbil"
            labelValue="bensin-person"
          >
            Bensin
          </RadioButtons>
          <RadioButtons
            radioValue="diesel-person"
            radioName="personbil"
            labelValue="diesel-person"
          >
            Diesel
          </RadioButtons>
          <RadioButtons
            radioValue="manuell-person"
            radioName="personbil"
            labelValue="manuell-person"
          >
            Manuell
          </RadioButtons>
          <RadioButtons
            radioValue="automat-person"
            radioName="personbil"
            labelValue="automat-person"
          >
            Automat
          </RadioButtons>
          <RadioButtons
            radioValue="4x4-person"
            radioName="personbil"
            labelValue="4x4-person"
          >
            4x4
          </RadioButtons>
        </form>
        <div className={styles["cars-container"]}>
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
          <CarCard
            single
            carImg={Hyondai}
            carBrand="Hyondai 4x4"
            carPrice="Fra 360 kr/per dag"
          />
        </div>
      </div>
    </div>
  );
};

export default Cars;
