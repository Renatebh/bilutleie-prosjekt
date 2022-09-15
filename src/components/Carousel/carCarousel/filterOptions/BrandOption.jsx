import React, { useState, useEffect } from "react";
import Option from "../../../ui/select/Option";
import useFetch from "../../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../../api/endpoints";
import styles from "../../../ui/select/Select.module.css";

const BrandOption = ({ onBrandOptionChange }) => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.brands}`);
  const [sortedBrands, setSortedBrands] = useState([]);

  const onOptionChangeHandler = (e) => {
    onBrandOptionChange(e.target.value);
  };

  const sortBrands = () => {
    let arr = [];

    data.data
      .sort((a, b) => {
        if (a.attributes.brand < b.attributes.brand) {
          return -1;
        }

        if (a.attributes.brand > b.attributes.brand) {
          return 1;
        }
      })
      .map((brand) => {
        arr.push(brand);
      });

    setSortedBrands([...arr]);
  };

  useEffect(() => {
    if (data) {
      sortBrands();
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <select
      onChange={onOptionChangeHandler}
      name="brand"
      id="brand"
      defaultValue="brand"
      className={styles.select}
    >
      <Option value={"brand"} disabled>
        merke
      </Option>
      {data &&
        sortedBrands.map((brand) => {
          return (
            <Option value={brand.attributes.brand} key={brand.id}>
              {brand.attributes.brand}
            </Option>
          );
        })}
      ;
    </select>
  );
};

export default BrandOption;
