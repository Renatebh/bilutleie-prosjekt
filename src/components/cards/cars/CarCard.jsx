import React from "react";
import styles from "./CarCard.module.css";

const Cars = ({ carImg, carBrand, carPrice, single }) => {
  return (
    <div
      className={
        single
          ? `${styles["card-container"]} ${styles.single}`
          : styles["card-container"]
      }
    >
      <img src={carImg} alt="" className={styles.image} />
      <p className={styles.brand}>{carBrand}</p>
      <p className={styles.price}>{carPrice}</p>
      <div className={styles["btn-container"]}>
        <button className={styles["btn"]}>Les mer</button>
        <button className={styles["btn"]}>Bestill</button>
      </div>
    </div>
  );
};

export default Cars;
