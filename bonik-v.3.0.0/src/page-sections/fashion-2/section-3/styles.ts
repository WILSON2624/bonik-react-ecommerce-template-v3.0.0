"use client";

import styled from "styled-components";

// STYLED COMPONENTS
export const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "4px",
  "& img": { transition: "all 0.3s" },
  "&:hover": {
    img: { transform: "scale(1.1)" },
    "& .category-title": {
      color: "white",
      backgroundColor: theme.colors.secondary.main
    }
  }
}));

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
