"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
export const Wrapper = styled("div")(({ theme }) => ({
  display: "grid",
  padding: "2rem 0",
  backgroundColor: "white",
  boxShadow: theme.shadows[5],
  gridTemplateColumns: "repeat(4, 1fr)",

  [`@media(max-width: ${deviceSize.md}px)`]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)"
  },

  [`@media(max-width: ${deviceSize.sm}px)`]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr"
  }
}));

export const ServiceItem = styled("div")(({ theme }) => ({
  flexGrow: 1,
  gap: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: `1px solid ${theme.colors.gray[400]}`,
  "&:last-child": { borderRight: 0 },
  [`@media(max-width: ${deviceSize.md}px)`]: {
    "&:nth-of-type(even)": { borderRight: 0 }
  },
  [`@media(max-width: ${deviceSize.sm}px)`]: {
    borderRight: 0,
    justifyContent: "flex-start"
  }
}));
