import React from "react";
import styled from "./RadioButtons.module.css";

const RadioButtons = ({ radioValue, radioName, children, labelValue }) => {
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
      <label className={styled["radio-label"]} htmlFor={labelValue}>
        {children}
      </label>
    </>
  );
};

export default RadioButtons;
