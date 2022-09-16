import React from "react";
import styled from "./RadioButtons.module.css";

const RadioButton = ({
  id,
  name,
  value,
  htmlFor,
  children,
  carType,
  onRadioBtnClick,
}) => {
  const onRadioBtnClickHandler = (e) => {
    onRadioBtnClick(e.target.value);
  };

  return (
    <>
      <input
        onClick={onRadioBtnClickHandler}
        className={styled.radiobutton}
        type="radio"
        id={id}
        name={name}
        value={value}
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
