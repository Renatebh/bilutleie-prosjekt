import React from "react";
import Heading from "../ui/heading/Heading";
import Table from "../ui/table/Table";
import SingleCarSlider from "../Carousel/singleCarSlider/SingleCarSlider";
import styles from "./Cars.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import API_CONSTANT_MAP from "../../api/endpoints";

const AboutCar = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.car}`);
  const { id } = useParams();

  {
    data && console.log(data.data.attributes.brand);
  }

  return (
    <>
      <main className={styles.containerAbout}>
        <div className={styles.wrapper}>
          <Heading mainHeading>
            {data && data.data.attributes.brand} {id}
          </Heading>
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
      </main>
    </>
  );
};

export default AboutCar;
