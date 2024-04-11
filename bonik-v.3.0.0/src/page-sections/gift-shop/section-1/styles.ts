"use client";

import styled from "styled-components";

import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
export const StyledBox = styled("div")(({ theme }) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: theme.colors.marron[100],
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute"
  }
}));

export const StyledGrid = styled(Grid)({
  maxWidth: 1280,
  margin: "auto",
  alignItems: "center"
});

export const GridItemOne = styled(Grid)({
  padding: 20,
  "& h1": {
    fontSize: 45,
    maxWidth: 400,
    lineHeight: 1.3
  },

  [`@media (max-width: ${deviceSize.md}px)`]: {
    "& h1": { fontSize: 30 }
  },

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    textAlign: "center",
    "& h1": { fontSize: 25 },
    "& button": { margin: "auto" }
  }
});

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  background: theme.colors.primary.main,
  "&:hover": { background: theme.colors.primary[400] }
}));

export const GridItemTwo = styled(Grid)({
  [`@media (max-width: ${deviceSize.sm}px)`]: {
    display: "none"
  }
});
