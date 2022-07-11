import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  width: 100vw;
  display: flex;
`;

const LogoWrapper = styled.div`
  height: 50px;
`;

const Heading = styled.h1`
  font-size: 40px;
`;

const Header = ({ children }) => {
  return (
    <NavBar>
      <LogoWrapper></LogoWrapper>
      <Heading>{children}</Heading>
    </NavBar>
  );
};

export default Header;
