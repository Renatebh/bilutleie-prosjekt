import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';

const HeroContentContainer = styled.div`
  max-width: 144rem;
  width: 100%;
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.blackTransparent};
  max-width: 70.6rem;
  max-height: 48.5rem;
  width: 40%;
  border-radius: 2rem;
  padding: 3.5rem 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
`;

const HeroLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  line-height: 2rem;
  text-align: center;
`;

const HeroLabelContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  height: 6.5rem;
  border-radius: 1rem 0 0 1rem;
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSelect = styled.select`
  padding: 2rem 4rem;
  width: 62%;
  border-radius: 0 1rem 1rem 0;
  text-align: center;
  padding: 0 2rem 0 2rem;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  cursor: pointer;
  color: #525252;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Date = styled.input`
  width: 62%;
  text-align: center;
  border-radius: 0 1rem 1rem 0;
  padding: 0 2rem 0 2rem;
  cursor: pointer;
  color: #525252;
`;

const CarType = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: none;
  height: 7rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

const Chevron = styled(FaChevronDown)`
  margin: 2rem 0 0 -4rem;
`;

const CarIcon = styled(FaCar)`
  height: 2.4rem;
  width: 2.4rem;
  margin-left: 1rem;
`;

const TruckIcon = styled(FaTruck)`
  height: 2.4rem;
  width: 2.4rem;
  margin-left: 1rem;
`;

const CarTypeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const Select = () => {
  return (
    <Container>
      <HeroLabelContainer>
        <HeroLabel htmlFor='hentested'>HENTESTED</HeroLabel>
      </HeroLabelContainer>
      <HeroSelect name='hentested' id='hentested' defaultValue={'default'}>
        <option value={'default'} disabled>
          -- Velg hentested --
        </option>
        <option value='volvo'>Osloveien 22, 0022 Oslo</option>
        <option value='saab'>Osloveien 22, 0022 Oslo</option>
      </HeroSelect>
      <Chevron />
    </Container>
  );
};

const HeroDate = ({ children }) => {
  return (
    <Container>
      <HeroLabelContainer>
        <HeroLabel htmlFor='start'>{children}</HeroLabel>
      </HeroLabelContainer>
      <Date
        type='datetime-local'
        id='start'
        name='trip-start'
        min='2022-07-08T07:30'
        max='2024-12-31T16:00'
      ></Date>
    </Container>
  );
};

const CarTypeBtn = ({ children }) => {
  return <CarType>{children}</CarType>;
};

const HeroForm = () => {
  return (
    <HeroContentContainer>
      <Form>
        <Select />
        <HeroDate>FRA DATO KLOKKESLETT</HeroDate>
        <HeroDate>TIL DATO KLOKKESLETT</HeroDate>
        <CarTypeContainer>
          <CarTypeBtn>
            Personbil <CarIcon />
          </CarTypeBtn>
          <CarTypeBtn>
            Varebil <TruckIcon />
          </CarTypeBtn>
        </CarTypeContainer>
        <SubmitBtn>Søk</SubmitBtn>
      </Form>
    </HeroContentContainer>
  );
};

export default HeroForm;
