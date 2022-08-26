import React from "react";
import styles from "./FilterCars.module.css";
import PriceOption from "./filterOptions/PriceOption";
import BrandOption from "./filterOptions/BrandOption";
import TypeOption from "./filterOptions/TypeOption";

const FilterCars = () => {
  return (
    <form className={styles.form}>
      <div className={styles["select-container"]}>
        <PriceOption />
      </div>
      <div className={styles["select-container"]}>
        <BrandOption />
      </div>
      <div className={styles["select-container"]}>
        <TypeOption />
      </div>
      <button className={`${styles.select} ${styles.button}`}>Søk</button>
    </form>
  );
};

export default FilterCars;
