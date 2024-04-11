import styled, { css, keyframes } from "styled-components";
import systemCss from "@styled-system/css";

const rotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

const Spinner = styled.div(
  systemCss({
    width: 24,
    height: 24,
    border: "4px solid",
    borderRadius: "50%",
    borderColor: "primary",
    borderTop: `3px solid white`,
    transitionProperty: "transform"
  }),
  css`
    animation: ${rotate} 1.2s infinite linear;
  `
);

export default Spinner;
