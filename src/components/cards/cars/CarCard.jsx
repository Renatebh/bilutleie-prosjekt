import React from "react";
import styles from "./CarCard.module.css";
import { Link } from "react-router-dom";

const CarCard = ({ carImg, carBrand, carPrice, single, id }) => {
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
        <Link to={`/about-car/${id}`} className={styles["link"]}>
          <button className={styles["btn"]}>Les mer</button>
        </Link>
        <Link to={`/order-car/${id}`} className={styles["link"]}>
          <button className={styles["btn"]}>Bestill</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
