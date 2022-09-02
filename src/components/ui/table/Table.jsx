import React from "react";
import styles from "./Table.module.css";

const Table = ({ price, kmPerDay, extraKm }) => {
  return (
    <table className={styles.table}>
      <thead className={styles["table-head"]}>
        <tr className={styles["table-row"]}>
          <th>Pris per døgn</th>
          <th>km inkl. per dag</th>
          <th>Ekstra km</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles["table-row"]}>
          <td>{price}</td>
          <td>{kmPerDay}</td>
          <td>{extraKm}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
