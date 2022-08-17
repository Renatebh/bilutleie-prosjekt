import React from "react";
import useFetch from "../../../hooks/useFetch";
import Heading from "../../ui/heading/Heading";
import API_CONSTANT_MAP from "../../../api/endpoints";

const CarCarouselHeading = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.headings}/2`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return <Heading>{data.data.attributes.heading}</Heading>;
};

export default CarCarouselHeading;
