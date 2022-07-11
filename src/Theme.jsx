import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryColor: '#00406A',
    secondaryColor: '#099EFF',
    black: '#000000',
    white: '#fff',
    linearGrey: 'linear-gradient(#fff, #cbcbcb)',
    blackTransparent: 'rgba(0, 0, 0, 0.74)',
  },

  screenSize: {
    desktop: '144rem',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
