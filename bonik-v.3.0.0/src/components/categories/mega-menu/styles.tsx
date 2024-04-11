import styled from "styled-components";
import { getTheme } from "@utils/utils";

export const StyledMegaMenu1 = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  right: auto;
  top: 0;
  z-index: 99;

  .title-link,
  .child-link {
    color: inherit;
    font-weight: 600;
    display: block;
    padding: 0.5rem 0px;
  }

  .child-link {
    font-weight: 400;
  }

  .mega-menu-content {
    padding: 0.5rem 0px;
    margin-left: 1rem;
    border-radius: 4px;
    background-color: ${getTheme("colors.body.paper")};
    box-shadow: ${getTheme("shadows.6")};
    transition: all 250ms ease-in-out;
  }
`;

export const StyledMegaMenuItem = styled.div`
  .menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 1rem;
    height: 40px;
    min-width: 278px;
    white-space: pre;
    transition: all 250ms ease-in-out;
    color: ${getTheme("colors.text.primary")};

    .title {
      padding-left: 0.75rem;
      flex-grow: 1;
    }
  }

  &:hover {
    .menu-item-link {
      color: ${getTheme("colors.primary.main")};
      background: ${getTheme("colors.primary.light")};
    }
  }
`;
