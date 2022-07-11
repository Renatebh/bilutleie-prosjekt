import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../../assets/racing (2).png';

const NavBar = styled.div`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  width: 100vw;
  display: flex;
`;

const LogoWrapper = styled.div`
  height: 8rem;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-family: sans-serif;
  }

  img {
    width: 3rem;
  }
`;

const LinksWrapper = styled.div`
  height: 8rem;
  width: 60%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    height: 8rem;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }

  li {
    color: ${({ theme }) => theme.colors.white};
    list-style: none;
    text-decoration: none;
  }
`;

const ContactWrapper = styled.div`
  height: 8rem;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    color: white;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const PhoneIcon = styled(FaPhoneAlt)`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <NavBar>
      <LogoWrapper>
        <img src={logo} alt='bildet av logoen' />
        <h1>Bilutleie</h1>
      </LogoWrapper>
      <LinksWrapper>
        <ul>
          <a href="/">
            <li>Personbil</li>
          </a>
          <a href="/">
            <li>Varbil</li>
          </a>
          <a href="/">
            <li>Priser</li>
          </a>
          <a href="/">
            <li>Kontakt oss</li>
          </a>
        </ul>
      </LinksWrapper>

      <ContactWrapper>
        <p>
          <PhoneIcon />
          22 00 22 00
        </p>
      </ContactWrapper>
    </NavBar>
  );
};

export default Header;
