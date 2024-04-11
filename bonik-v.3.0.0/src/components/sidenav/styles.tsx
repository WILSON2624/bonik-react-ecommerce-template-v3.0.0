import styled from "styled-components";
import { getTheme, isValidProp } from "@utils/utils";

// ==============================================================
interface StyledSidenavProps {
  open: boolean;
  width?: number;
  scroll?: boolean;
  position?: "left" | "right";
}
// ==============================================================

export const StyledSidenav = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<StyledSidenavProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1501;
  position: fixed;
  background: rgba(0, 0, 0, 0.53);

  /* @keyframes slide {
    from {
      ${({ position }) => position} : (${({ width }) => width ?? 0})px;
    }
    to {
      ${({ position }) => position}: 0;
    }
  } */

  .sidenav-content {
    height: 100%;
    position: absolute;
    ${({ position }) => position}: 0;
    width: ${(props) => props.width}px;
    background-color: ${getTheme("colors.body.paper")};
    overflow: ${({ scroll }) => (scroll ? "auto" : "hidden")};
    /* animation: slide 250ms linear; */
  }

  & ~ .cursor-pointer {
    cursor: pointer;
  }
`;
