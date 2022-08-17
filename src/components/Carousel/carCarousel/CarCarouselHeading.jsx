import React from "react";
import useFetch from "../../../hooks/useFetch";
import Heading from "../../ui/heading/Heading";
import API_CONSTANT_MAP from "../../../api/endpoints";

const CarCarouselHeading = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.headings}/2`);

  return (
    <>
      {data && <Heading>{data.data.attributes.heading}</Heading>}
      {loading && "Loading..."}
      {err && "Error..."}
    </>
  );
};

export default CarCarouselHeading;
