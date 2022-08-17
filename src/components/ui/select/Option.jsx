import React from "react";

const Option = ({ children, value, disabled }) => {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
};

export default Option;
