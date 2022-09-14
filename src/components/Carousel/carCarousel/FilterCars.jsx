import React, { useState, useEffect } from "react";
import styles from "./FilterCars.module.css";
import PriceOption from "./filterOptions/PriceOption";
import BrandOption from "./filterOptions/BrandOption";
import TypeOption from "./filterOptions/TypeOption";
import API_CONSTANT_MAP from "../../../api/endpoints";
import useFetch from "../../../hooks/useFetch";

const FilterCars = () => {
  const [priceOptionVal, setPriceOptionVal] = useState("");
  const [brandOptionVal, setBrandOptionVal] = useState("");
  const [typeOptionVal, setTypeOptionVal] = useState("");
  const [cars, setCArs] = useState([]);

  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.cars}`);

  const priceOptionChange = (val) => {
    setPriceOptionVal(val);
  };

  const brandOptionChange = (val) => {
    setBrandOptionVal(val);
  };

  const typeOptionChange = (val) => {
    setTypeOptionVal(val);
  };

  const sortCarsByPrice = () => {
    console.log("sort", priceOptionVal);
    if (priceOptionVal.toLowerCase() === "stigende") {
      setCArs((prevState) => {
        const newState = prevState.sort(
          (a, b) => parseInt(a.attributes.price) - parseInt(b.attributes.price)
        );
        return newState;
      });
    }

    if (priceOptionVal.toLowerCase() === "synkende") {
      setCArs((prevState) => {
        const newState = prevState.sort(
          (a, b) => parseInt(b.attributes.price) - parseInt(a.attributes.price)
        );
        return newState;
      });
    }

    console.log(cars);
  };

  useEffect(() => {
    console.log(priceOptionVal.toLowerCase(), brandOptionVal, typeOptionVal);
    sortCarsByPrice();
  }, [priceOptionVal, brandOptionVal, typeOptionVal]);

  useEffect(() => {
    if (data) {
      setCArs([...data.data]);
      console.log(data.data);
    }
  }, [data]);

  /* useEffect(() => {
    console.log(cars);
  }, [cars]); */

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
