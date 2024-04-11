"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
export const Wrapper = styled("div")(({ theme }) => ({
  display: "grid",
  padding: "2rem 0",
  gridTemplateColumns: "repeat(4, 1fr)",
  borderTop: `1px solid ${theme.colors.gray[300]}`,
  borderBottom: `1px solid ${theme.colors.gray[300]}`,

  [`@media(max-width: ${deviceSize.md}px)`]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)"
  },

  [`@media(max-width: ${deviceSize.sm}px)`]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr"
  },

  ".item": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
}));
