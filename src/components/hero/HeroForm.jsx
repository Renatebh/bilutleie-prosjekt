import React, { useState } from "react";
import HeroText from "./HeroText";
import RadioButton from "../ui/radioButton/RadioButton";
import { FaChevronDown, FaCar, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import createTodaysDate from "../../helpers/creatTodaysDate";
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
  const date = createTodaysDate();

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
        min={date}
        max="2024-12-31T16:00"
      />
    </div>
  );
};

const HeroForm = () => {
  const [radioBtnVal, SetRadioBtnVal] = useState("");

  const onRadioBtnClick = (val) => {
    SetRadioBtnVal(val);
  };

  const handleUndefinedCarType = (e) => {
    e.preventDefault();
    alert("Venligst velg biltype");
  };

  return (
    <div className={styles["heroContent-container"]}>
      <form className={styles.form}>
        <Select />
        <HeroDate forLabel="start" id={"fra"}>
          FRA DATO KLOKKESLETT
        </HeroDate>
        <HeroDate forLabel="end" id={"til"}>
          TIL DATO KLOKKESLETT
        </HeroDate>
        <div className={styles["car-type-container"]}>
          <RadioButton
            onRadioBtnClick={onRadioBtnClick}
            carType
            id="personbil"
            name="hero-form-radio"
            value="cars"
            htmlFor="personbil"
          >
            Personbil <FaCar className={styles["car-icon"]} />
          </RadioButton>
          <RadioButton
            onRadioBtnClick={onRadioBtnClick}
            carType
            id="varebil"
            name="hero-form-radio"
            value="trucks"
            htmlFor="varebil"
          >
            Varebil <FaTruck className={styles["truck-icon"]} />
          </RadioButton>
        </div>
        {radioBtnVal !== "" && (
          <Link className={styles["submit-link"]} to={`/${radioBtnVal}`}>
            <button className={styles["submit-btn"]}>Søk</button>
          </Link>
        )}
        {radioBtnVal === "" && (
          <button
            onClick={handleUndefinedCarType}
            className={styles["submit-btn-error"]}
          >
            Søk
          </button>
        )}
      </form>
      <HeroText />
    </div>
  );
};

export default HeroForm;
