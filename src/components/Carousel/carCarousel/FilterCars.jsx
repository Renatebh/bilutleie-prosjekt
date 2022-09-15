import React from "react";
import styles from "./FilterCars.module.css";
import PriceOption from "./filterOptions/PriceOption";
import BrandOption from "./filterOptions/BrandOption";

const FilterCars = ({
  onPriceOptionChange,
  onBrandOptionChange,
  onTypeOptionChange,
}) => {
  return (
    <form className={styles.form}>
      <div className={styles["select-container"]}>
        <PriceOption onPriceOptionChange={onPriceOptionChange} />
      </div>
      <div className={styles["select-container"]}>
        <BrandOption onBrandOptionChange={onBrandOptionChange} />
      </div>
    </form>
  );
};

export default FilterCars;
