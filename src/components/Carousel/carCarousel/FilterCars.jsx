import React from "react";
import Select from "../../ui/select/Select";
import Option from "../../ui/select/Option";
import styles from "./FilterCars.module.css";
import useFetch from "../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../api/endpoints";

const FilterCars = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.prices}`);

  {
    data && console.log(data.data[0].attributes.price);
  }

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <form className={styles.form}>
      <Select name="" id="" defaultValue="price">
        <Option value={"price"} disabled>
          pris
        </Option>
        {data &&
          data.data.map((price) => {
            <Option value={price.attributes.price} key={price.id}>
              {price.attributes.price}
            </Option>;
          })}
        ;
      </Select>
      <Select name="" id="" defaultValue="brand">
        <Option value={"brand"} disabled>
          merke
        </Option>
        <Option value="volvo">Osloveien 22, 0022 Oslo</Option>
        <Option value="saab">Osloveien 22, 0022 Oslo</Option>
      </Select>
      <Select name="" id="" defaultValue="type">
        <Option value={"type"} disabled>
          type
        </Option>
        <Option value="volvo">Osloveien 22, 0022 Oslo</Option>
        <Option value="saab">Osloveien 22, 0022 Oslo</Option>
      </Select>
      <button className={`${styles.select} ${styles.button}`}>Søk</button>
    </form>
  );
};

export default FilterCars;
