import React from "react";
import styled from "styled-components";
import HeroBackground from "../../assets/tabea-schimpf-O7WzqmeYoqc-unsplash.jpg";
import HeroForm from "./HeroForm";

const HeroContainer = styled.div`
  background-image: url(${HeroBackground});
  height: 70vh;
  min-height: 40rem;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroForm />
    </HeroContainer>
  );
};

export default HeroSection;
