import React from "react";
import DatePicker from "../../ui/datePicker/DatePicker";
import styles from "./OrderCarForm.module.css";
import Select from "../../ui/select/Select";
import Option from "../../ui/select/Option";
import Checkbox from "../../ui/checkbox/Checkbox";

const OrderCarForm = () => {
  return (
    <form action="" className={styles["order-car-form"]}>
      <div className={styles["input-container"]}>
        <DatePicker id="hente" name="bestill-bil">
          Hente
        </DatePicker>
      </div>
      <div className={styles["input-container"]}>
        <DatePicker id="levere" name="bestill-bil">
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
      <div className={styles["checkboxes-wrapper"]}>
        <div className={styles["checkbox-container"]}>
          <Checkbox id="km" name="km">
            Ubegrenset Km
          </Checkbox>
        </div>
        <div className={styles["checkbox-container"]}>
          <Checkbox id="ekstra-fører" name="ekstra-fører">
            Ekstra-fører
          </Checkbox>
        </div>
        <div className={styles["checkbox-container"]}>
          <Checkbox id="fører-under-24" name="fører-under-24">
            Fører under 24 år
          </Checkbox>
        </div>
        <div className={styles["checkbox-container"]}>
          <Checkbox id="barnepute" name="barnepute">
            Barnepute
          </Checkbox>
        </div>
        <div className={styles["checkbox-container"]}>
          <Checkbox id="barnesete" name="barnesete">
            Barnesete
          </Checkbox>
        </div>
        <div className={styles["checkbox-container"]}>
          <Checkbox id="gps" name="gps">
            GPS
          </Checkbox>
        </div>
      </div>
    </form>
  );
};

export default OrderCarForm;
