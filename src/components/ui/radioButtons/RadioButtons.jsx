import React from "react";
import styled from "./RadioButtons.module.css";

const RadioButtons = ({
  radioValue,
  radioName,
  children,
  labelValue,
  carType,
}) => {
  const radioValueUpperCase = radioValue.toUpperCase();

  return (
    <>
      <input
        className={styled.radiobutton}
        type="radio"
        id={radioValue}
        name={radioName}
        value={radioValueUpperCase}
      />
      <label
        className={
          carType
            ? `${styled["car-type"]} ${styled["radio-label"]}}`
            : styled["radio-label"]
        }
        htmlFor={labelValue}
      >
        {children}
      </label>
    </>
  );
};

export default RadioButtons;
