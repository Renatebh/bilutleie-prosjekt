import React from "react";
import styles from "./OrderCar.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../api/endpoints";
import Heading from "../../ui/heading/Heading";
import Table from "../../ui/table/Table";
import SingleCarSlider from "../../Carousel/singleCarSlider/SingleCarSlider";
import OrderCarForm from "./OrderCarForm";

const OrderCar = () => {
  return (
    <main className={styles.main}>
      <div className={styles["content-container"]}>
        <div className={styles["left-side"]}>
          <Heading>Bestilling</Heading>
          <OrderCarForm />
        </div>
        <SingleCarSlider />
      </div>
    </main>
  );
};

export default OrderCar;
