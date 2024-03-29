import React from "react";
import styles from "./Footer.module.css";
import useFetch from "../../hooks/useFetch";
import API_CONSTANT_MAP from "../../api/endpoints";

const OpeneningHours = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.hours}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <div>
      <p className={styles.opening}>Åpningstider</p>
      <table>
        <thead>
          {data.data.map((day) => {
            return (
              <tr key={day.id}>
                <th>{day.attributes.day}</th>
                <td>{day.attributes.hours}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default OpeneningHours;
