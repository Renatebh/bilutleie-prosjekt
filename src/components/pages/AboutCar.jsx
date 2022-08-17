import React from "react";
import Heading from "../ui/heading/Heading";
import Table from "../ui/table/Table";
import SingleCarSlider from "../Carousel/singleCarSlider/SingleCarSlider";
import styles from "./Cars.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import API_CONSTANT_MAP from "../../api/endpoints";
import ReactMarkdown from "react-markdown";

const AboutCar = () => {
  const { id } = useParams();
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.id(id)}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <>
      <main className={styles.containerAbout}>
        <div className={styles.wrapper}>
          <Heading mainHeading>
            {data.data.attributes.brand} Id: {id}
          </Heading>
          <ReactMarkdown>{data.data.attributes.info}</ReactMarkdown>
          <ReactMarkdown>{data.data.attributes.info}</ReactMarkdown>
          <Table
            price={data.data.attributes.price}
            kmPerDay={data.data.attributes.kmPerDay}
            extraKm={data.data.attributes.extraKm}
          />
          <Table
            price={data.data.attributes.price}
            kmPerDay={data.data.attributes.kmPerDay}
            extraKm={data.data.attributes.extraKm}
          />
          <button className={styles.btn}>Bestill</button>
        </div>
        <SingleCarSlider />
      </main>
    </>
  );
};

export default AboutCar;
