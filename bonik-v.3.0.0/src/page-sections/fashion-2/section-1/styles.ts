"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENT
export const StyledBox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ".title": {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: "1.35rem"
  },

  "& img": { width: "100%" },

  [`@media(max-width: ${deviceSize.sm}px)`]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": { fontSize: 32, marginBottom: 10 },

    ".grid-item": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }
  },

  [`@media(max-width: ${deviceSize.xs}px)`]: {
    ".title": { textAlign: "center" }
  }
});
