import React from "react";
import styles from "./Footer.module.css";

const OpeneningHours = () => {
  return (
    <div>
      <p className={styles.opening}>Åpningstider</p>
      <table>
        <thead>
          <tr>
            <th>Mandag</th>
            <td>9 - 16</td>
          </tr>
          <tr>
            <th>Tirsdag</th>
            <td>9 - 16</td>
          </tr>
          <tr>
            <th>Onsdag</th>
            <td>9 - 16</td>
          </tr>
          <tr>
            <th>Torsdag</th>
            <td>9 - 17</td>
          </tr>
          <tr>
            <th>Fredag</th>
            <td>9 - 16</td>
          </tr>
          <tr>
            <th>Lørdag</th>
            <td>9 - 15</td>
          </tr>
          <tr>
            <th>Søndag</th>
            <td>Stengt</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default OpeneningHours;
