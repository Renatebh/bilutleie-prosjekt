import React from "react";
import HeroText from "./HeroText";
import RadioButtons from "../ui/radioButtons/RadioButtons";
import { FaChevronDown, FaCar, FaTruck } from "react-icons/fa";
import styles from "./HeroForm.module.css";

const Select = () => {
  const test = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles["hero-label-container"]}>
        <label className={styles["hero-label"]} htmlFor="hentested">
          HENTESTED
        </label>
      </div>
      <select
        onClick={test}
        className={styles["hero-select"]}
        name="hentested"
        id="hentested"
        defaultValue={"default"}
      >
        <option value={"default"} disabled>
          Velg hentested
        </option>
        <option value="volvo">Osloveien 22, 0022 Oslo</option>
        <option value="saab">Osloveien 22, 0022 Oslo</option>
      </select>
      <FaChevronDown className={styles.chevron} />
    </div>
  );
};

const HeroDate = ({ children, forLabel }) => {
  return (
    <div className={styles.container}>
      <div className={styles["hero-label-container"]}>
        <label className={styles["hero-label"]} htmlFor={forLabel}>
          {children}
        </label>
      </div>
      <input
        className={styles.date}
        type="datetime-local"
        id={forLabel}
        name="trip-start"
        min="2022-07-08T07:30"
        max="2024-12-31T16:00"
      ></input>
    </div>
  );
};

const HeroForm = () => {
  return (
    <div className={styles["heroContent-container"]}>
      <form className={styles.form}>
        <Select />
        <HeroDate forLabel="start">FRA DATO KLOKKESLETT</HeroDate>
        <HeroDate forLabel="end">TIL DATO KLOKKESLETT</HeroDate>
        <div className={styles["car-type-container"]}>
          <RadioButtons
            carType
            radioValue="personbil"
            radioName="hero-form-radio"
            labelValue="personbil"
          >
            Personbil <FaCar className={styles["car-icon"]} />
          </RadioButtons>
          <RadioButtons
            carType
            radioValue="varebil"
            radioName="hero-form-radio"
            labelValue="varebil"
          >
            Varebil <FaTruck className={styles["truck-icon"]} />
          </RadioButtons>
        </div>
        <button className={styles["submit-Btn"]}>S??k</button>
      </form>
      <HeroText />
    </div>
  );
};

export default HeroForm;
