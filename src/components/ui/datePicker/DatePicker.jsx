import React from "react";
import styles from "./DatePicker.module.css";

const DatePicker = ({
  children,
  id,
  name,
  onFromDateChange,
  onToDateChange,
  from,
  to,
}) => {
  const date = new Date().toISOString().slice(0, -8);

  const handleGetFromDate = (e) => {
    onFromDateChange(e.target.value);
  };

  const handleGetToDate = (e) => {
    onToDateChange(e.target.value);
  };

  if (from) {
    return (
      <>
        <label htmlFor={id} className={styles.label}>
          {children}
        </label>
        <input
          onChange={handleGetFromDate}
          className={styles.input}
          type="datetime-local"
          id={id}
          name={name}
          min={date}
          max="2024-12-31T16:00"
        />
      </>
    );
  }

  if (to) {
    return (
      <>
        <label htmlFor={id} className={styles.label}>
          {children}
        </label>
        <input
          onChange={handleGetToDate}
          className={styles.input}
          type="datetime-local"
          id={id}
          name={name}
          min={date + 1}
          max="2024-12-31T16:00"
        />
      </>
    );
  }
};

export default DatePicker;
