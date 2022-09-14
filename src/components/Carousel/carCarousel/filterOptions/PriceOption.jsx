import React from "react";
import Option from "../../../ui/select/Option";
import useFetch from "../../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../../api/endpoints";
import styles from "../../../ui/select/Select.module.css";

const PriceOption = ({ onPriceOptionChange }) => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.prices}`);

  const onOptionChangeHandler = (e) => {
    onPriceOptionChange(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <select
      onChange={onOptionChangeHandler}
      name="price"
      id="price"
      defaultValue="price"
      className={styles.select}
    >
      <Option value={"price"} disabled>
        pris
      </Option>
      {data &&
        data.data.map((price) => {
          return (
            <Option value={price.attributes.price} key={price.id}>
              {price.attributes.price}
            </Option>
          );
        })}
      ;
    </select>
  );
};

export default PriceOption;
