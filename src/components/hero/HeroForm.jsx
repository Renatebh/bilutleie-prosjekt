import React from "react";
import HeroText from "./HeroText";
import RadioButton from "../ui/radioButton/RadioButton";
import { FaChevronDown, FaCar, FaTruck } from "react-icons/fa";
import styles from "./HeroForm.module.css";

const Select = () => {
  return (
    <div className={styles.container}>
      <div className={styles["hero-label-container"]}>
        <label className={styles["hero-label"]} htmlFor="hentested">
          HENTESTED
        </label>
      </div>
      <select
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

const HeroDate = ({ children, id }) => {
  return (
    <div className={styles.container}>
      <div className={styles["hero-label-container"]}>
        <label className={styles["hero-label"]} htmlFor={id}>
          {children}
        </label>
      </div>
      <input
        className={styles.date}
        type="datetime-local"
        id={id}
        name="trip-start"
        min="2022-07-08T07:30"
        max="2024-12-31T16:00"
      />
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
          <RadioButton
            carType
            id="personbil"
            name="hero-form-radio"
            value="personbil"
            htmlFor="personbil"
          >
            Personbil <FaCar className={styles["car-icon"]} />
          </RadioButton>
          <RadioButton
            carType
            id="varebil"
            name="hero-form-radio"
            value="varebil"
            htmlFor="varebil"
          >
            Varebil <FaTruck className={styles["truck-icon"]} />
          </RadioButton>
        </div>
        <button className={styles["submit-Btn"]}>Søk</button>
      </form>
      <HeroText />
    </div>
  );
};

export default HeroForm;
