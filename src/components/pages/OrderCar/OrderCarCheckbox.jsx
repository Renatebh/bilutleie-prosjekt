import React, { useState, useEffect, useRef } from "react";
import styles from "./OrderCarForm.module.css";
import API_CONSTANT_MAP from "../../../api/endpoints";
import useFetch from "../../../hooks/useFetch";

const getFirstWord = (el) => {
  const firstWord = el.split(" ");
  return firstWord;
};

const OrderCarCheckbox = ({ onCheckboxChecked }) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [checkbox, setCheckbox] = useState(null);

  const checkboxesRef = useRef(checkboxes);

  const { loading, err, data } = useFetch(
    `${API_CONSTANT_MAP.orderCarCheckboxes}`
  );

  const handleCeckboxes = () => {
    let arr = [];

    if (data) {
      data.data.map((checkbox) => {
        arr.push({
          id: checkbox.id,
          price: checkbox.attributes.price,
          isChecked: false,
        });
      });

      setCheckboxes([...arr]);
    }
  };

  const getCheckbox = (parentId) => {
    const objId = checkboxes.find((key) => key.id === parseInt(parentId));
    setCheckbox(objId);
  };

  const updateIsChecked = () => {
    setCheckboxes((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === checkbox.id) {
          if (obj.isChecked === false) {
            return { ...obj, isChecked: true };
          } else {
            return { ...obj, isChecked: false };
          }
        }

        return obj;
      });

      return newState;
    });
  };

  useEffect(() => {
    handleCeckboxes();
  }, [data]);

  const onCheckboxCheckedHandler = (checkboxesArr) => {
    onCheckboxChecked(checkboxesArr);
  };

  useEffect(() => {
    if (checkbox !== null) {
      updateIsChecked();
    }
  }, [checkbox]);

  useEffect(() => {
    checkboxesRef.current = checkboxes;
    onCheckboxCheckedHandler(checkboxesRef.current);
  }, [checkboxes]);

  if (loading) return <p>Loading..</p>;
  if (err) return <p>Error...</p>;

  return (
    <div className={styles["checkboxes-wrapper"]}>
      {data &&
        data.data.map((checkbox) => {
          return (
            <div
              className={styles["checkbox-container"]}
              key={checkbox.id}
              id={checkbox.id}
            >
              <input
                onChange={(e) => getCheckbox(e.target.parentElement.id)}
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
