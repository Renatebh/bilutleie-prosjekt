import React from "react";

const FilterCars = () => {
  return (
    <form>
      <select name="" id="" defaultValue={"price"}>
        <option value={"price"} disabled>
          pris
        </option>
        <option value="volvo">Osloveien 22, 0022 Oslo</option>
        <option value="saab">Osloveien 22, 0022 Oslo</option>
      </select>
      <select name="" id="" defaultValue={"brand"}>
        <option value={"brand"} disabled>
          merke
        </option>
        <option value="volvo">Osloveien 22, 0022 Oslo</option>
        <option value="saab">Osloveien 22, 0022 Oslo</option>
      </select>
      <select name="" id="" defaultValue={"type"}>
        <option value={"type"} disabled>
          type
        </option>
        <option value="volvo">Osloveien 22, 0022 Oslo</option>
        <option value="saab">Osloveien 22, 0022 Oslo</option>
      </select>
      <button>Søk</button>
    </form>
  );
};

export default FilterCars;
