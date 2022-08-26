import React from "react";
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

  let fromDate;
  let toDate;
  let days;

  const getFromDate = (date) => {
    fromDate = new Date(date);
    console.log(fromDate);
  };

  const getToDate = (date) => {
    toDate = new Date(date);
    console.log(toDate);
  };

  const calcDaysBetween = () => {
    const difference = toDate.getTime() - fromDate.getTime();
    console.log(difference);
    days = Math.ceil(difference / (1000 * 3600 * 24));
    console.log(days);
  };

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
      <OrderCarCheckbox />
      <div onClick={calcDaysBetween} className={styles["input-container"]}>
        <Table
          price={`${data.data.attributes.price},-`}
          kmPerDay="100"
          extraKm="2,-"
        />
      </div>
      <div className={styles["input-container"]}>
        <ButtonLarge>Bestill nå</ButtonLarge>
      </div>
    </form>
  );
};

export default OrderCarForm;
