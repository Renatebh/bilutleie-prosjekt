import React from "react";
import RadioButton from "./RadioButton";
import useFetch from "../../../hooks/useFetch";

const endPoint = "api/cars-radiobuttons";
const url = import.meta.env.VITE_API_URL;

const personBil = "personbil";

const RadioButtonsCars = ({ onRadioBtnClick }) => {
  const { loading, err, data } = useFetch(`${url}/${endPoint}`);

  return (
    <>
      {data &&
        data.data.map((btn) => {
          return (
            <RadioButton
              onRadioBtnClick={onRadioBtnClick}
              key={btn.id}
              id={btn.attributes.radiobutton}
              name={personBil}
              value={btn.attributes.radiobutton}
              htmlFor={btn.attributes.radiobutton}
            >
              {btn.attributes.radiobutton}
            </RadioButton>
          );
        })}
      {loading && "Loading..."}
      {err && "Error..."}
    </>
  );
};

export default RadioButtonsCars;
