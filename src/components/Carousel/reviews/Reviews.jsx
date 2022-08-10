import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import Heading from "../../ui/heading/Heading";
import styles from "./Reviews.module.css";
import useFetch from "../../../hooks/useFetch";

const endPoint = "api/headings/5";

const Reviews = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        {data && <Heading>{data.data.attributes.heading}</Heading>}
      </div>
      <Carousel>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium
            </p>
            <p className={styles.name}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium
            </p>
            <p className={styles.name}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium
            </p>
            <p className={styles.name}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium
            </p>
            <p className={styles.name}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <div className={styles["card-container"]}>
            <p className={styles.review}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium
            </p>
            <p className={styles.name}>Hyondai 4x4</p>
          </div>
        </SwiperSlide>
      </Carousel>
    </div>
  );
};

export default Reviews;
