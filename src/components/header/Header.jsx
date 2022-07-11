import React from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";

const NavBar = styled.div`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  width: 100vw;
  display: flex;
`;

const LogoWrapper = styled.div`
  height: 80px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-family: sans-serif;
  }
`;

const LinksWrapper = styled.div`
  height: 80px;
  width: 60%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 80px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: sans-serif;
  }

  li {
    color: ${({ theme }) => theme.colors.white};
    list-style: none;
  }
`;

const ContactWrapper = styled.div`
  height: 80px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    color: white;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 18px;
  }

  .phone-icon {
    margin-right: 10px;
  }
`;

const Heading = styled.h1`
  font-size: 40px;
`;

const Header = ({ children }) => {
  return (
    <NavBar>
      <LogoWrapper>
        <h1>Bilutleie</h1>
      </LogoWrapper>
      <LinksWrapper>
        <ul>
          <li>Personbil</li>
          <li>Varbil</li>
          <li>Priser</li>
          <li>Kontakt oss</li>
        </ul>
      </LinksWrapper>
      <ContactWrapper>
        <p>
          <FaPhoneAlt className="phone-icon" />
          22 00 22 00
        </p>
      </ContactWrapper>
    </NavBar>
  );
};

export default Header;
