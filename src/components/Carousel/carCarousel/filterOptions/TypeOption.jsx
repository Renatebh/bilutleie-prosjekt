import React from "react";
import Option from "../../../ui/select/Option";
import useFetch from "../../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../../api/endpoints";
import styles from "../../../ui/select/Select.module.css";

const TypeOption = ({ onTypeOptionChange }) => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.types}`);

  const onOptionChangeHandler = (e) => {
    onTypeOptionChange(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <select
      onChange={onOptionChangeHandler}
      name="type"
      id="type"
      defaultValue="type"
      className={styles.select}
    >
      <Option value={"type"} disabled>
        type
      </Option>
      {data &&
        data.data.map((type) => {
          return (
            <Option value={type.attributes.type} key={type.id}>
              {type.attributes.type}
            </Option>
          );
        })}
      ;
    </select>
  );
};

export default TypeOption;
