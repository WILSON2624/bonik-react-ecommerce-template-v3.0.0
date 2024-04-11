import styled from "styled-components";
import { getTheme, isValidProp } from "@utils/utils";

const headerHeight = 72;

export const HeaderWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<{ fixed: boolean }>`
  box-shadow: ${(props) => props.fixed && getTheme("shadows.regular")};

  .link {
    transition: color 250ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${getTheme("colors.primary.main")};
    }
  }

  ${(props) =>
    props.fixed
      ? `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    height: ${headerHeight}px;
    z-index: 99;

    .link {
      color: inherit;
    }

    @keyframes slide-from-top {
      from {
        top: -${headerHeight}px;
      }
      to {
        top: 0;
      }
    }
    
    animation: slide-from-top 250ms ease-in-out;
    
    & + div {
      padding-top: ${headerHeight}px;
    }
  `
      : ""}

  .menu {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    .right-links {
      display: none;
    }
    .menu {
      display: unset;
    }
  }
`;
