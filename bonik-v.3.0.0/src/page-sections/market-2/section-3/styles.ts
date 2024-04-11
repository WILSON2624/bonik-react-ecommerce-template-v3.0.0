"use client";

import styled, { keyframes } from "styled-components";

import { Button } from "@component/buttons";
import { H3, Span } from "@component/Typography";
import { deviceSize } from "@utils/constants";

const slideX = keyframes`
    from { left: 120% }
    to { left: -100% }
`;

// STYLED COMPONENTS
export const CategoryCard = styled("div")({
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "4px",
  position: "relative",
  "& img": { transition: "all 0.3s" },
  "&:hover": {
    img: { transform: "scale(1.1)" },
    "& .category-title": { color: "#fff", backgroundColor: "#000" }
  }
});

export const CategoryTitle = styled("div")({
  left: 10,
  right: 10,
  bottom: 10,
  padding: 8,
  textAlign: "center",
  borderRadius: "2px",
  position: "absolute",
  transition: "all 0.3s",
  backgroundColor: "rgba(255,255,255, .67)"
});

export const AdWrapper = styled("div")({
  display: "flex",
  color: "#fff",
  marginTop: "3rem",
  overflow: "hidden",
  alignItems: "center",
  position: "relative",
  backgroundColor: "#434343",
  "&::before": {
    inset: 5,
    zIndex: 3,
    content: "''",
    position: "absolute",
    border: "1px dashed #fff"
  },

  [`@media (max-width: ${deviceSize.sm}px)`]: { flexDirection: "column" }
});

export const AdTitle1 = styled(H3)({
  zIndex: 10,
  fontSize: 27,
  padding: "1.5rem",
  position: "relative",
  textTransform: "uppercase",
  backgroundColor: "#e0e0e0",
  color: "#000",
  "&::after": {
    top: -36,
    bottom: 0,
    zIndex: -1,
    right: -17,
    content: "''",
    position: "absolute",
    transform: "rotate(23deg)",
    border: "70px solid #e0e0e0"
  },

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    marginBottom: 16,
    "&::after": { display: "none" }
  }
});

export const AddButton = styled(Button)({
  borderRadius: 0,
  color: "#000",
  backgroundColor: "white",
  "&:focus": { boxShadow: "none" }
});

export const AnimatedText = styled(Span)`
  font-size: inherit;
  font-style: italic;
  position: relative;
  letter-spacing: 1.3;
  white-space: nowrap;
  text-overflow: hidden;
  text-transform: uppercase;
  animation: ${slideX} 30s infinite linear 1s;
`;
