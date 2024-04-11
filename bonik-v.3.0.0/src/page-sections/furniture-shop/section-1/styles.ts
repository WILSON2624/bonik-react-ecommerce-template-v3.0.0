"use client";

import styled from "styled-components";

import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";

export const StyledRoot = styled("div")({
  marginBottom: 60,
  overflow: "hidden",
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute"
  }
});

export const Container = styled("div")({
  minHeight: 650,
  display: "flex",
  alignItems: "center",
  backgroundImage: "url('/assets/images/Furniture Shop/Furniture Shop Header.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  transition: "all 0.3s",
  [`@media(max-width:${deviceSize.md}px)`]: { height: "60vh" },
  [`@media(max-width:${deviceSize.sm}px)`]: { height: "50vh" }
});

export const StyledGrid = styled(Grid)({
  maxWidth: 1280,
  margin: "auto",
  position: "relative",
  alignItems: "center",
  padding: "2rem 0px 5rem 0px"
});

export const GridItemOne = styled(Grid)({
  padding: 20,
  "& h1": { fontSize: 60 },
  [`@media(max-width:${deviceSize.md}px)`]: { "& h1": { fontSize: 50 } },
  [`@media(max-width:${deviceSize.sm}px)`]: {
    textAlign: "center",
    "& h1": { fontSize: 40 }
  }
});

export const StyledButton = styled(Button)({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  padding: "8px 30px",
  [`@media(max-width:${deviceSize.sm}px)`]: { margin: "auto" }
});

export const TextBox = styled("div")({
  marginTop: 5,
  marginBottom: 40,
  paddingRight: 100,
  [`@media(max-width:${deviceSize.md}px)`]: { paddingRight: 0 }
});
