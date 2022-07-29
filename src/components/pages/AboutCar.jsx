import React from "react";
import Heading from "../ui/heading/Heading";
import Table from "../ui/table/Table";
import styles from "./Test.module.css";

const AboutCar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Heading mainHeading>Car Name</Heading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          distinctio qui illo, asperiores nemo eos laboriosam reprehenderit
          praesentium consectetur sapiente at similique impedit ratione, amet
          veritatis provident magni doloribus magnam?
        </p>
        <Table />
      </div>
    </div>
  );
};

export default AboutCar;
