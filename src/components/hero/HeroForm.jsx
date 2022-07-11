import React from 'react';
import styled from 'styled-components';

const HeroForm = styled.form`
  background-color: ${({ theme }) => theme.colors.blackTransparent};
  width: 70.6rem;
  height: 54.5rem;
  border-radius: 2rem;
`;

const HeroLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 2rem 4rem;
`;

const Select = () => {
  return (
    <>
      <HeroLabel htmlFor='cars'>Hentested:</HeroLabel>
      <select name='cars' id='cars'>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='opel'>Opel</option>
        <option value='audi'>Audi</option>
      </select>
    </>
  );
};

const HeroSelect = () => {
  return (
    <HeroForm>
      <Select />
    </HeroForm>
  );
};

export default HeroSelect;
