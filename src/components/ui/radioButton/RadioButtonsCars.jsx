import React from "react";
import RadioButton from "./RadioButton";
import useFetch from "../../../hooks/useFetch";

const endPoint = "api/cars-radiobuttons";
const url = import.meta.env.VITE_API_URL;

const personBil = "personbil";

const RadioButtonsCars = () => {
  const { loading, err, data } = useFetch(`${url}/${endPoint}`);

  return (
    <>
      {!data ? (
        <p>Data does not exist</p>
      ) : (
        data.data.map((btn) => {
          return (
            <RadioButton
              key={btn.id}
              id={btn.attributes.radiobutton}
              name={personBil}
              value={personBil}
              htmlFor={btn.attributes.radiobutton}
            >
              {btn.attributes.radiobutton}
            </RadioButton>
          );
        })
      )}
    </>
  );
};

export default RadioButtonsCars;
