import React from "react";
import { CSSTransition } from "react-transition-group";

const FadeIn = ({ children }) => {
  return (
    <CSSTransition
      appear={true}
      in={true}
      timeout={2000}
      classNames="fadeInAnimation"
    >
      {children}
    </CSSTransition>
  );
};

export default FadeIn;
