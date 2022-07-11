import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
<<<<<<< HEAD
    primaryColor: '#00406A',
    secondaryColor: '#099EFF',
    black: '#000000',
    white: '#fff',
    linearGrey: 'linear-gradient(#fff, #cbcbcb)',
    blackTransparent: 'rgba(0, 0, 0, 0.74)',
=======
    primaryColor: "#00406A",
    secondaryColor: "#099EFF",
    black: "#000000",
    white: "#fff",
    linearGrey: "linear-gradient(#fff, #cbcbcb)",
>>>>>>> ab6edbf741cc9f2a4bd81bda6fea0121f58c8a4f
  },

  screenSize: {
    desktop: "144rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
