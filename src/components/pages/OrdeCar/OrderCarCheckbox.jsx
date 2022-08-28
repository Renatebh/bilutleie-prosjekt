import React from "react";
import styles from "./OrderCarForm.module.css";
import Checkbox from "../../ui/checkbox/Checkbox";
import API_CONSTANT_MAP from "../../../api/endpoints";
import useFetch from "../../../hooks/useFetch";

const getFirstWord = (el) => {
  const firstWord = el.split(" ");
  console.log(firstWord);
  return firstWord;
};

const OrderCarCheckbox = () => {
  const { loading, err, data } = useFetch(
    `${API_CONSTANT_MAP.orderCarCheckboxes}`
  );

  if (loading) return <p>Loading..</p>;
  if (err) return <p>Error...</p>;

  return (
    <div className={styles["checkboxes-wrapper"]}>
      {data &&
        data.data.map((checkbox) => {
          console.log(checkbox.attributes.name);
          return (
            <div className={styles["checkbox-container"]} key={checkbox.id}>
              <Checkbox
                id={getFirstWord(checkbox.attributes.name)}
                name={getFirstWord(checkbox.attributes.name)}
              >
                {checkbox.attributes.name}
              </Checkbox>
            </div>
          );
        })}
    </div>
  );
};

export default OrderCarCheckbox;
