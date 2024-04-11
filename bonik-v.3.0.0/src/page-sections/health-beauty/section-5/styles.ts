"use client";

import styled from "styled-components";

// STYLED COMPONENTS
export const Container = styled("div")({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem"
});

export const Content = styled("div")(({ theme }) => ({
  gap: "1rem",
  display: "flex",
  flexWrap: "wrap",
  padding: "1.5rem",
  borderRadius: "8px",
  background: "#fff",
  alignItems: "center",
  boxShadow: theme.shadows[2]
}));

export const IconBox = styled("div")(({ theme }) => ({
  display: "flex",
  fontSize: "25px",
  borderRadius: "50%",
  alignItems: "center",
  background: theme.colors.primary[50]
}));
