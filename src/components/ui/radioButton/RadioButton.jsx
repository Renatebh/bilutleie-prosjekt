import React from "react";
import styled from "./RadioButtons.module.css";

const RadioButton = ({ id, name, value, htmlFor, children, carType }) => {
  const valueUpperCase = value.toUpperCase();

  return (
    <>
      <input
        className={styled.radiobutton}
        type="radio"
        id={id}
        name={name}
        value={valueUpperCase}
      />
      <label
        className={
          carType
            ? `${styled["car-type"]} ${styled["radio-label"]}}`
            : styled["radio-label"]
        }
        htmlFor={htmlFor}
      >
        {children}
      </label>
    </>
  );
};

export default RadioButton;
