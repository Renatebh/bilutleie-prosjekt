import React from "react";
import Heading from "../ui/heading/Heading";
import RadioButtons from "../ui/radioButtons/RadioButtons";
import styles from "./Test.module.css";

const Cars = () => {
  return (
    <div className={styles.container}>
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
      <Heading>VAREBIL</Heading>
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
    </div>
  );
};

export default Cars;
