import React, { useState, useEffect } from "react";
import DatePicker from "../../ui/datePicker/DatePicker";
import styles from "./OrderCarForm.module.css";
import Select from "../../ui/select/Select";
import Option from "../../ui/select/Option";
import OrderCarCheckbox from "./OrderCarCheckbox";
import ButtonLarge from "../../ui/buttons/ButtonLarge";
import Table from "../../ui/table/Table";
import API_CONSTANT_MAP from "../../../api/endpoints";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

let fromDate;
let toDate;
let days;
let totalPrice;

const OrderCarForm = () => {
  const { id } = useParams();
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.id(id)}`);
  const [rentPrice, setRentPrice] = useState("");
  const [dailyCarPrice, setDailyCarPrice] = useState("");
  const [dailyExtrasPrice, setDailyExtrasPrice] = useState("");
  const [checked, setChecked] = useState(false);

  const getFromDate = (date) => {
    fromDate = new Date(date);
    calcDaysBetween();
  };

  const getToDate = (date) => {
    toDate = new Date(date);
    calcDaysBetween();
  };

  const calcDaysBetween = () => {
    if (toDate !== undefined && fromDate !== undefined) {
      const difference = toDate.getTime() - fromDate.getTime();
      days = Math.ceil(difference / (1000 * 3600 * 24));
      setRentPrice(data.data.attributes.price * days);
    }
  };

  const getCheckboxPrice = (price) => {
    setDailyExtrasPrice(price);
  };

  const getCheckboxChecked = (checked) => {
    setChecked(checked);
  };

  const calcTotCarPrice = () => {
    if (checked === true) {
      totalPrice =
        parseInt(dailyExtrasPrice) * parseInt(days) + parseInt(rentPrice);
      console.log(totalPrice);
      setRentPrice(totalPrice);
    }
  };

  useEffect(() => {
    async function getPrice() {
      await fetch(`${API_CONSTANT_MAP.id(id)}`)
        .then((res) => res.json())
        .then((data) => {
          setRentPrice(data.data.attributes.price);
          setDailyCarPrice(data.data.attributes.price);
        });
    }

    getPrice();
  }, []);

  useEffect(() => {
    calcTotCarPrice();
  }, [totalPrice]);

  if (loading) return <p>Loading..</p>;
  if (err) return <p>Error...</p>;

  return (
    <form action="" className={styles["order-car-form"]}>
      <div className={styles["input-container"]}>
        <DatePicker
          from
          getFromDate={getFromDate}
          id="hente"
          name="bestill-bil"
        >
          Hente
        </DatePicker>
      </div>
      <div className={styles["input-container"]}>
        <DatePicker to getToDate={getToDate} id="levere" name="bestill-bil">
          Levere
        </DatePicker>
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="hentested" className={styles["select-label"]}>
          Hentested
        </label>
        <Select name="" id="hentested" defaultValue="hentested">
          <Option value={"hentested"} disabled>
            Velg hentested
          </Option>
          <Option value="Osloveien 22, 0022 Oslo">
            Osloveien 22, 0022 Oslo
          </Option>
        </Select>
      </div>
      <OrderCarCheckbox
        getCheckboxPrice={getCheckboxPrice}
        getCheckboxChecked={getCheckboxChecked}
      />
      <div className={styles["input-container"]}>
        <Table price={dailyCarPrice} kmPerDay="100" extraKm="2,-" />
      </div>
      <div
        className={`${styles["input-container"]} ${styles["price-container"]}`}
      >
        <h2 className={styles.price}>Totalpris: {rentPrice}</h2>
      </div>
      <div className={styles["input-container"]}>
        <ButtonLarge>Bestill nå</ButtonLarge>
      </div>
    </form>
  );
};

export default OrderCarForm;
