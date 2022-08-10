import React from "react";
import useFetch from "../../../hooks/useFetch";
import Heading from "../../ui/heading/Heading";

const endPoint = "api/headings/2";

const CarCarouselHeading = () => {
  const { loading, err, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/${endPoint}`
  );

  return <>{data && <Heading>{data.data.attributes.heading}</Heading>}</>;
};

export default CarCarouselHeading;
