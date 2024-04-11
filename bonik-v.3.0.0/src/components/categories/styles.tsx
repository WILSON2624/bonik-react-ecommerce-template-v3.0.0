import styled from "styled-components";
import { getTheme, isValidProp } from "@utils/utils";

type StyledCategoryProps = { open: boolean };

type CategoryDropdownProps = {
  open: boolean;
  position?: "absolute" | "relative";
};

export const StyledCategory = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<StyledCategoryProps>`
  position: relative;
  .cursor-pointer {
    cursor: pointer;
  }
  .dropdown-icon {
    margin-left: 0.25rem;
    transition: all 250ms ease-in-out;
    transform: rotate(${(props) => (props.open ? "90deg" : "0deg")});
  }
`;

export const StyledCategoryDropdown = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<CategoryDropdownProps>`
  left: 0;
  right: auto;
  border-radius: 4px;
  padding: 0.5rem 0px;
  transform-origin: top;
  position: ${({ position }) => position};
  transform: ${({ open }) => (open ? "scaleY(1)" : "scaleY(0)")};
  top: ${({ position }) => (position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem")};
  background-color: ${getTheme("colors.body.paper")};
  box-shadow: ${getTheme("shadows.regular")};
  transition: all 250ms ease-in-out;
  z-index: 98;
`;

export const StyledCategoryMenuItem = styled.div`
  .category-dropdown-link {
    height: 40px;
    display: flex;
    cursor: pointer;
    min-width: 278px;
    white-space: pre;
    padding: 0px 1rem;
    align-items: center;
    transition: all 250ms ease-in-out;

    .title {
      padding-left: 0.75rem;
      flex-grow: 1;
    }
  }

  &:hover {
    & > .category-dropdown-link {
      color: ${getTheme("colors.primary.main")};
      background: ${getTheme("colors.primary.light")};
    }

    & > .mega-menu {
      display: block;
    }
  }
`;
