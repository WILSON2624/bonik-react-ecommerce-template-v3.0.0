"use client";

import styled from "styled-components";

// STYLED COMPONENT
export const Wrapper = styled("div")({
  rowGap: "1rem",
  padding: "3rem",
  display: "flex",
  flexWrap: "wrap",
  columnGap: "4rem",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundImage: "url(/assets/images/banners/banner-14.jpg)",
  "&:hover": { "& .offer": { transform: "rotate(-15deg) scale(1.1)" } }
});

export const OfferBox = styled("div")(({ theme }) => ({
  width: 140,
  height: 140,
  color: "#fff",
  display: "flex",
  borderRadius: "50%",
  textAlign: "center",
  alignItems: "center",
  transition: "all 0.3s",
  justifyContent: "center",
  transform: "rotate(-15deg)",
  border: `2px solid ${theme.colors.gray[600]}`
}));
