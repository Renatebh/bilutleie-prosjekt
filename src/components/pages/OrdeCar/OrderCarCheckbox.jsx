import React, { useState, useContext, useEffect } from "react";
import styles from "./OrderCarForm.module.css";
import API_CONSTANT_MAP from "../../../api/endpoints";
import useFetch from "../../../hooks/useFetch";
import PriceContext from "../../../store/price-context";

const getFirstWord = (el) => {
  const firstWord = el.split(" ");
  return firstWord;
};

const OrderCarCheckbox = ({ getCheckboxChecked }) => {
  const priceCtx = useContext(PriceContext);
  const [dailyExtrasPrice, setDailyExtrasPrice] = useState(null);
  const { loading, err, data } = useFetch(
    `${API_CONSTANT_MAP.orderCarCheckboxes}`
  );

  const handleCheckboxPrice = (price) => {
    setDailyExtrasPrice(parseInt(price));
  };

  const handleCheckboxChecked = (checked) => {
    getCheckboxChecked(checked);
  };

  useEffect(() => {
    priceCtx.getCheckboxPriceCtx(dailyExtrasPrice);
    console.log("Checkbox price:", dailyExtrasPrice, "ctx:", priceCtx.price);
  }, [dailyExtrasPrice, priceCtx.price]);

  if (loading) return <p>Loading..</p>;
  if (err) return <p>Error...</p>;

  return (
    <>
      <div className={styles["checkboxes-wrapper"]}>
        {data &&
          data.data.map((checkbox) => {
            return (
              <div className={styles["checkbox-container"]} key={checkbox.id}>
                <input
                  onChange={(e) => {
                    handleCheckboxPrice(checkbox.attributes.price);
                    handleCheckboxChecked(e.target.checked);
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  name={getFirstWord(checkbox.attributes.name)}
                  id={getFirstWord(checkbox.attributes.name)}
                />
                <label
                  htmlFor={getFirstWord(checkbox.attributes.name)}
                  className={styles.label}
                >
                  {checkbox.attributes.name}:
                  <span className={styles["price-per-day"]}>
                    kr {checkbox.attributes.price},-
                  </span>
                </label>
              </div>
            );
          })}
        <p>Pris per døgn</p>
      </div>
    </>
  );
};

export default OrderCarCheckbox;
