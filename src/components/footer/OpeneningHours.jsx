import React from "react";
import styles from "./Footer.module.css";
import useFetch from "../../hooks/useFetch";

const endPoint = "api/hours";

const OpeneningHours = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div>
      <p className={styles.opening}>Åpningstider</p>
      <table>
        <thead>
          {!data ? (
            <tr>
              <th>Data does not exist</th>
            </tr>
          ) : (
            data.data.map((day) => {
              return (
                <tr key={day.id}>
                  <th>{day.attributes.day}</th>
                  <td>{day.attributes.hours}</td>
                </tr>
              );
            })
          )}
        </thead>
      </table>
    </div>
  );
};

export default OpeneningHours;
