import React from "react";
import styles from "./FilterCars.module.css";

const FilterCars = () => {
  return (
    <form className={styles.form}>
      <select name="" id="" defaultValue={"price"} className={styles.select}>
        <option value={"price"} disabled>
          pris
        </option>
        <option value="volvo">Osloveien 22, 0022 Oslo</option>
        <option value="saab">Osloveien 22, 0022 Oslo</option>
      </select>
      <select name="" id="" defaultValue={"brand"} className={styles.select}>
        <option value={"brand"} disabled>
          merke
        </option>
        <option value="volvo">Osloveien 22, 0022 Oslo</option>
        <option value="saab">Osloveien 22, 0022 Oslo</option>
      </select>
      <select name="" id="" defaultValue={"type"} className={styles.select}>
        <option value={"type"} disabled>
          type
        </option>
        <option value="volvo">Osloveien 22, 0022 Oslo</option>
        <option value="saab">Osloveien 22, 0022 Oslo</option>
      </select>
      <button className={`${styles.select} ${styles.button}`}>Søk</button>
    </form>
  );
};

export default FilterCars;
