import React from "react";
import Heading from "../ui/heading/Heading";
import Table from "../ui/table/Table";
import SingleCarSlider from "../Carousel/singleCarSlider/SingleCarSlider";
import styles from "./Cars.module.css";

const AboutCar = () => {
  return (
    <>
      <div className={styles.containerAbout}>
        <div className={styles.wrapper}>
          <Heading mainHeading>Car Name</Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            distinctio qui illo, asperiores nemo eos laboriosam reprehenderit
            praesentium consectetur sapiente at similique impedit ratione, amet
            veritatis provident magni doloribus magnam?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            distinctio qui illo, asperiores nemo eos laboriosam reprehenderit
            praesentium consectetur sapiente at similique impedit ratione, amet
            veritatis provident magni doloribus magnam?
          </p>
          <Table />
          <Table />
          <Table />
          <button className={styles.btn}>Bestill</button>
        </div>
        <SingleCarSlider />
      </div>
    </>
  );
};

export default AboutCar;
