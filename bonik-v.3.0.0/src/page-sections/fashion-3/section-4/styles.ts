"use client";

import styled from "styled-components";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
export const ContentBox = styled("div")({
  top: 30,
  left: 0,
  right: 0,
  textAlign: "center",
  position: "absolute"
});

export const ButtonWrapper = styled("div")({
  left: 0,
  right: 0,
  bottom: 30,
  gap: "1rem",
  display: "flex",
  position: "absolute",
  justifyContent: "center",
  "& button": { borderRadius: 0 }
});

export const Category2Wrapper = styled("div")({
  width: "100%",
  position: "relative",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    "&:first-of-type": { marginBottom: "1.5rem" }
  }
});

export const StyledButton = styled(Button)({
  left: 0,
  right: 0,
  bottom: 30,
  margin: "auto",
  borderRadius: 0,
  width: "fit-content",
  position: "absolute"
});
