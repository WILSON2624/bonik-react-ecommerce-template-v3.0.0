"use client";

import styled from "styled-components";

import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";

export const StyledRoot = styled("div")({
  overflow: "hidden",
  backgroundColor: "#efefef",
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute"
  }
});

export const StyledGrid = styled(Grid)({
  maxWidth: 1200,
  margin: "auto",
  alignItems: "center"
});

export const GridItemOne = styled(Grid)({
  padding: 20,
  "& h1": {
    fontSize: 35,
    maxWidth: 400,
    lineHeight: 1.3
  },

  [`@media (max-width: ${deviceSize.md}px)`]: {
    "& h1": { fontSize: 30, marginLeft: "auto", marginRight: "auto" }
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
  backgroundColor: theme.colors.primary.main,
  "&:hover": { backgroundColor: theme.colors.primary[400] }
}));

export const GridItemTwo = styled(Grid)({
  [`@media (max-width: ${deviceSize.sm}px)`]: { display: "none" }
});
