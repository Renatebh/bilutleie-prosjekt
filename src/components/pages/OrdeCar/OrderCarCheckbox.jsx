import React, { useState, useContext, useEffect } from "react";
import styles from "./OrderCarForm.module.css";
import API_CONSTANT_MAP from "../../../api/endpoints";
import useFetch from "../../../hooks/useFetch";
import PriceContext from "../../../store/price-context";

const getFirstWord = (el) => {
  const firstWord = el.split(" ");
  return firstWord;
};

const OrderCarCheckbox = () => {
  const priceCtx = useContext(PriceContext);
  const [dailyExtrasPrice, setDailyExtrasPrice] = useState(null);
  const [checkedCount, setCheckedCount] = useState(0);

  const { loading, err, data } = useFetch(
    `${API_CONSTANT_MAP.orderCarCheckboxes}`
  );

  const handleCheckboxPrice = (price) => {
    setDailyExtrasPrice(parseInt(price));
  };

  const handleCheckedCount = (e) => {
    if (e.target.checked === true) {
      setCheckedCount((count) => count + 1);
    }

    if (e.target.checked === false) {
      setCheckedCount((count) => count - 1);
    }
  };

  useEffect(() => {
    priceCtx.getCheckboxPriceCtx(dailyExtrasPrice);
  }, [dailyExtrasPrice, priceCtx.price]);

  useEffect(() => {
    priceCtx.getCheckedCountCtx(checkedCount);
  }, [checkedCount]);

  if (loading) return <p>Loading..</p>;
  if (err) return <p>Error...</p>;

  return (
    <div className={styles["checkboxes-wrapper"]}>
      {data &&
        data.data.map((checkbox) => {
          return (
            <div className={styles["checkbox-container"]} key={checkbox.id}>
              <input
                onChange={(e) => {
                  handleCheckboxPrice(checkbox.attributes.price);
                  handleCheckedCount(e, e.target.checked);
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
                {checkbox.attributes.name}
                <span className={styles["price-per-day"]}>
                  {checkbox.attributes.price},-
                </span>
              </label>
            </div>
          );
        })}
      <p>Pris per døgn</p>
    </div>
  );
};

export default OrderCarCheckbox;
