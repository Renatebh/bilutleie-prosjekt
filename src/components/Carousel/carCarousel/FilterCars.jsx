import React, { useState, useEffect } from "react";
import styles from "./FilterCars.module.css";
import PriceOption from "./filterOptions/PriceOption";
import BrandOption from "./filterOptions/BrandOption";
import TypeOption from "./filterOptions/TypeOption";

const FilterCars = () => {
  const [priceOptionVal, setPriceOptionVal] = useState("price");
  const [brandOptionVal, setBrandOptionVal] = useState("brand");
  const [typeOptionVal, setTypeOptionVal] = useState("type");

  const priceOptionChange = (val) => {
    setPriceOptionVal(val);
  };

  const brandOptionChange = (val) => {
    setBrandOptionVal(val);
  };

  const typeOptionChange = (val) => {
    setTypeOptionVal(val);
  };

  useEffect(() => {
    console.log(priceOptionVal, brandOptionVal, typeOptionVal);
  }, [priceOptionVal, brandOptionVal, typeOptionVal]);

  return (
    <form className={styles.form}>
      <div className={styles["select-container"]}>
        <PriceOption onPriceOptionChange={priceOptionChange} />
      </div>
      <div className={styles["select-container"]}>
        <BrandOption onBrandOptionChange={brandOptionChange} />
      </div>
      <div className={styles["select-container"]}>
        <TypeOption onTypeOptionChange={typeOptionChange} />
      </div>
      <button className={`${styles.select} ${styles.button}`}>Søk</button>
    </form>
  );
};

export default FilterCars;
