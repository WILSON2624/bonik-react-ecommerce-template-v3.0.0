import styled from "styled-components";
import { isValidProp } from "@utils/utils";

// ==============================================================
interface StyledStickyProps {
  fixed: boolean;
  fixedOn: number;
  componentHeight: number;
}
// ==============================================================

export const StyledBox = styled("div").withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<StyledStickyProps>(({ componentHeight, fixedOn, fixed }) => ({
  paddingTop: fixed ? componentHeight : 0,

  "& .hold": {
    zIndex: 5,
    boxShadow: "none",
    position: "relative"
  },

  "& .fixed": {
    left: 0,
    right: 0,
    zIndex: 1500,
    position: "fixed",
    top: `${fixedOn}px`,
    transition: "all 350ms ease-in-out"
  }
}));
