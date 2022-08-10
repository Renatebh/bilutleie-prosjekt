import React from "react";
import HeadingWhite from "../ui/heading/HeadingWhite";
import styles from "./Description.module.css";
import useFetch from "../../hooks/useFetch";

const endPoint = "api/headings/3";

const Description = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return (
    <div className={styles.container}>
      {data && <HeadingWhite>{data.data.attributes.heading}</HeadingWhite>}
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium Lorem ipsum dolor sit amet consectetur
        <br />
        <br />
        adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
        repudiandae consequuntur voluptatum laborum numquam blanditiis harum
        quisquam eius sed odit fugiat iusto fuga praesentium
      </p>
    </div>
  );
};

export default Description;
