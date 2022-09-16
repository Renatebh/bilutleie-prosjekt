import React, { useState, useEffect, useRef } from "react";
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

const OrderCarForm = () => {
  const { id } = useParams();
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.id(id)}`);
  const [rentPrice, setRentPrice] = useState(null);
  const [dailyCarPrice, setDailyCarPrice] = useState(null);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [days, setDays] = useState(1);
  const [checkboxes, setCheckboxes] = useState([]);
  const [checkedChecboxes, setCheckedChecboxes] = useState([]);
  const [totalExtrasPrice, setTotalExtrasPrice] = useState(0);

  const checkboxesRef = useRef(checkboxes);
  const checkedChecboxesRef = useRef(checkedChecboxes);

  const onFromDateChange = (date) => {
    setFromDate(new Date(date));
  };

  const onToDateChange = (date) => {
    setToDate(new Date(date));
  };

  const onCheckboxChecked = (checkboxesArr) => {
    setCheckboxes(checkboxesArr);
  };

  const calcRentPrice = () => {
    if (days < 1) {
      alert("Velg minimum 1 dag");
      return;
    } else {
      setRentPrice(
        parseInt(data.data.attributes.price) * days + totalExtrasPrice * days
      );
    }
  };

  const calcDaysBetween = () => {
    if (toDate !== undefined && fromDate !== undefined) {
      const difference = toDate.getTime() - fromDate.getTime();
      setDays(Math.ceil(difference / (1000 * 3600 * 24)));
    }
  };

  const filterCheckedCheckboxes = () => {
    setCheckedChecboxes(
      checkboxes.filter((checkbox) => checkbox.isChecked === true)
    );
  };

  const calcTotalExtrasPrice = () => {
    const reduceToalExtras = checkedChecboxes.reduce(
      (previousValue, currentValue) => {
        return previousValue + currentValue.price;
      },
      0
    );

    setTotalExtrasPrice(reduceToalExtras);

    console.log(totalExtrasPrice);
  };

  useEffect(() => {
    calcDaysBetween();

    if (data) {
      calcRentPrice();
    }
  }, [fromDate, toDate, days, totalExtrasPrice]);

  useEffect(() => {
    checkboxesRef.current = checkboxes;
    checkedChecboxesRef.current = checkedChecboxes;
    filterCheckedCheckboxes();
  }, [checkboxes]);

  useEffect(() => {
    calcTotalExtrasPrice();
  }, [checkedChecboxes]);

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
      <OrderCarCheckbox onCheckboxChecked={onCheckboxChecked} />
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
