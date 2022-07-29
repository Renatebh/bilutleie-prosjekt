import React from "react";
import styles from "./Table.module.css";

const Table = () => {
  return (
    <table className={styles.table}>
      <thead className={styles["table-head"]}>
        <tr className={styles["table-row"]}>
          <th>Pris</th>
          <th>km inkl. per dag</th>
          <th>Ekstra km</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles["table-row"]}>
          <td>650,-</td>
          <td>100</td>
          <td>2,-</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
