import React, { useState, useEffect, useContext, useRef } from "react";
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
import PriceContext from "../../../store/price-context";

const OrderCarForm = () => {
  const priceCtx = useContext(PriceContext);
  const { id } = useParams();
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.id(id)}`);
  const [rentPrice, setRentPrice] = useState(null);
  const [dailyCarPrice, setDailyCarPrice] = useState(null);
  const [dailyExtrasPrice, setDailyExtrasPrice] = useState(null);
  const [checkedCount, setCheckedCount] = useState(0);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [days, setDays] = useState(1);

  const prevCheckedCountRef = useRef("");
  const totalExtrasPriceRef = useRef(0);

  const onFromDateChange = (date) => {
    setFromDate(new Date(date));
  };

  const onToDateChange = (date) => {
    setToDate(new Date(date));
  };

  const calcRentPrice = () => {
    if (days < 1) {
      alert("Velg minimum 1 dag");
      return;
    } else {
      setRentPrice(
        parseInt(data.data.attributes.price) * days +
          totalExtrasPriceRef.current
      );
    }
  };

  const calcDaysBetween = () => {
    if (toDate !== undefined && fromDate !== undefined) {
      const difference = toDate.getTime() - fromDate.getTime();
      setDays(Math.ceil(difference / (1000 * 3600 * 24)));
    }
  };

  const calcDailyExtrasPrice = () => {
    if (dailyExtrasPrice === null) return;

    if (prevCheckedCountRef.current < checkedCount) {
      totalExtrasPriceRef.current =
        totalExtrasPriceRef.current + dailyExtrasPrice * days;
      console.log(totalExtrasPriceRef);
    }

    if (prevCheckedCountRef.current > checkedCount) {
      totalExtrasPriceRef.current =
        totalExtrasPriceRef.current - dailyExtrasPrice * days;
      console.log(totalExtrasPriceRef);
    }
  };

  useEffect(() => {
    setDailyExtrasPrice(priceCtx.price);
  }, [priceCtx.price, priceCtx.counter]);

  useEffect(() => {
    prevCheckedCountRef.current = checkedCount;
  }, [priceCtx.counter]);

  useEffect(() => {
    calcDaysBetween();
    totalExtrasPriceRef.current = totalExtrasPriceRef.current * days;
    if (data) {
      calcRentPrice();
    }
    console.log(days);
  }, [fromDate, toDate, days]);

  useEffect(() => {
    setCheckedCount(priceCtx.counter);
    calcDailyExtrasPrice();
    console.log(totalExtrasPriceRef.current);
    if (data) {
      calcRentPrice();
    }
    prevCheckedCountRef.current = checkedCount;
  }, [checkedCount, priceCtx.counter, days]);

  useEffect(() => {
    async function getPrice() {
      await fetch(`${API_CONSTANT_MAP.id(id)}`)
        .then((res) => res.json())
        .then((data) => {
          setRentPrice(parseInt(data.data.attributes.price));
          setDailyCarPrice(parseInt(data.data.attributes.price));
        });
    }

    getPrice();
  }, []);

  if (loading) return <p>Loading..</p>;
  if (err) return <p>Error...</p>;

  return (
    <form action="" className={styles["order-car-form"]}>
      <div className={styles["input-container"]}>
        <DatePicker
          from
          onFromDateChange={onFromDateChange}
          id="hente"
          name="bestill-bil"
        >
          Hente
        </DatePicker>
      </div>
      <div className={styles["input-container"]}>
        <DatePicker
          to
          onToDateChange={onToDateChange}
          id="levere"
          name="bestill-bil"
        >
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
      <OrderCarCheckbox />
      <div className={styles["input-container"]}>
        <Table price={`${dailyCarPrice},-`} kmPerDay="100" extraKm="2,-" />
      </div>
      <div
        className={`${styles["input-container"]} ${styles["price-container"]}`}
      >
        <h2 className={styles.price}>Totalpris: {rentPrice},-</h2>
      </div>
      <div className={styles["input-container"]}>
        <ButtonLarge>Bestill nå</ButtonLarge>
      </div>
    </form>
  );
};

export default OrderCarForm;
