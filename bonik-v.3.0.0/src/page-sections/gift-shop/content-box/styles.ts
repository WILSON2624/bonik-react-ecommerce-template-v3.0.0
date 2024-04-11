"use client";

import styled from "styled-components";

import Container from "@component/Container";
import { deviceSize, layoutConstant } from "@utils/constants";

// styled component
export const StyledContainer = styled(Container)({
  gap: "1.75rem",
  display: "flex",
  marginBottom: "5rem",
  padding: "0 !important",
  "& .sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    [`@media (max-width:${deviceSize.md}px)`]: { display: "none" }
  },

  "& .pageContent": {
    left: "unset",
    position: "relative",
    width: `calc(100% - ${layoutConstant.grocerySidenavWidth})`,
    [`@media (max-width:${deviceSize.md}px)`]: { width: "100%", marginLeft: 0 }
  }
});
