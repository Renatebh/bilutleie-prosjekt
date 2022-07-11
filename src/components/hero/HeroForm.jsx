import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.blackTransparent};
  width: 70.6rem;
  height: 54.5rem;
  border-radius: 2rem;
  padding: 4.5rem 5.5rem;
`;

const HeroLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 2rem 4rem;
`;

const HeroSelect = styled.select`
  padding: 2rem 4rem;
  width: 70%;
  text-align: center;
`;

const Select = () => {
  return (
    <>
      <HeroLabel htmlFor='hentested'>Hentested:</HeroLabel>
      <HeroSelect name='hentested' id='hentested' defaultValue={'default'}>
        <option value={'default'} disabled>
          -- Velg hentested --
        </option>
        <option value='volvo'>Osloveien 22, 0022 Oslo</option>
        <option value='saab'>Osloveien 22, 0022 Oslo</option>
      </HeroSelect>
    </>
  );
};

const HeroForm = () => {
  return (
    <Form>
      <Select />
    </Form>
  );
};

export default HeroForm;
