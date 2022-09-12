import React, { useState } from "react";
import styles from "../pages/ContactUs.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className={styles["form-div"]}>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
