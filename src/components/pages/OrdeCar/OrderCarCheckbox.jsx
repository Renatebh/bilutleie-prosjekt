import React from "react";
import styles from "./OrderCarForm.module.css";
import Checkbox from "../../ui/checkbox/Checkbox";

const OrderCarCheckbox = () => {
  return (
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
  );
};

export default OrderCarCheckbox;
