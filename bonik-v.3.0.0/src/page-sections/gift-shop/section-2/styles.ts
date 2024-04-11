"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

export const Container = styled("div")({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem"
});

export const Item = styled("div")(({ theme }) => ({
  display: "flex",
  gap: ".7rem",
  flexWrap: "wrap",
  background: "#fff",
  alignItems: "center",
  padding: "1.5rem 0.8rem",
  justifyContent: "center",
  border: `1px solid ${theme.colors.gray[300]}`,

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column"
  }
}));

export const IconBox = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "12px",
  fontSize: "22px",
  borderRadius: "50%",
  alignItems: "center",
  color: theme.colors.marron.main,
  background: theme.colors.marron[50]
}));
