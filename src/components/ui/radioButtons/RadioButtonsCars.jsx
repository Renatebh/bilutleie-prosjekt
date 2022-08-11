import React from "react";
import RadioButtons from "./RadioButtons";
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
            <RadioButtons
              key={btn.id}
              radioValue={btn.attributes.radiobutton}
              radioName={personBil}
              labelValue={btn.attributes.radiobutton}
            >
              {btn.attributes.radiobutton}
            </RadioButtons>
          );
        })
      )}
    </>
  );
};

export default RadioButtonsCars;
