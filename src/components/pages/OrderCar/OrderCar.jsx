import React from "react";
import styles from "./OrderCar.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import API_CONSTANT_MAP from "../../../api/endpoints";
import Heading from "../../ui/heading/Heading";
import SingleCarSlider from "../../Carousel/singleCarSlider/SingleCarSlider";
import OrderCarForm from "./OrderCarForm";
import PriceProvider from "../../../store/PriceProvider";

const OrderCar = () => {
  const { id } = useParams();
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.id(id)}`);

  if (loading) return <p>Loading..</p>;
  if (err) return <p>Error...</p>;

  return (
    <PriceProvider>
      <main className={styles.main}>
        <div className={styles["content-container"]}>
          <div className={styles["left-side"]}>
            <Heading mainHeading>
              Bestill {data.data.attributes.brand} Id: {id}
            </Heading>
            <OrderCarForm />
          </div>
          <div className={styles["left-side"]}>
            <SingleCarSlider />
          </div>
        </div>
      </main>
    </PriceProvider>
  );
};

export default OrderCar;
