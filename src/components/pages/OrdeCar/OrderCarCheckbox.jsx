import React from "react";
import styles from "./OrderCarForm.module.css";
import API_CONSTANT_MAP from "../../../api/endpoints";
import useFetch from "../../../hooks/useFetch";

const getFirstWord = (el) => {
  const firstWord = el.split(" ");
  return firstWord;
};

const OrderCarCheckbox = ({ getCheckboxPrice, getCheckboxChecked }) => {
  const { loading, err, data } = useFetch(
    `${API_CONSTANT_MAP.orderCarCheckboxes}`
  );

  const handleCheckboxPrice = (price) => {
    getCheckboxPrice(parseInt(price));
  };

  const handleCheckboxChecked = (checked) => {
    getCheckboxChecked(checked);
  };

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
