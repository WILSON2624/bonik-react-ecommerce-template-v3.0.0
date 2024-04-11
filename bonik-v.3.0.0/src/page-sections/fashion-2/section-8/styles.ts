"use client";

import styled from "styled-components";
import NavLink from "@component/nav-link";

// STYLED COMPONENTS
export const ImageBox = styled("div")({
  padding: 0,
  maxHeight: 220,
  display: "flex",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  "& img": { transition: "0.3s" },
  "&:hover": { "& img": { transform: "scale(1.1)" } }
});

export const DateBox = styled("div")(({ theme }) => ({
  top: 30,
  left: 30,
  width: 50,
  height: 50,
  display: "flex",
  textAlign: "center",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[1],
  backgroundColor: theme.colors.gray[200]
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
  fontWeight: 600,
  position: "relative",
  paddingBottom: "2px",
  textTransform: "uppercase",
  "&:hover::after": { width: "100%" },
  "&:after": {
    left: 0,
    bottom: 0,
    width: "0%",
    content: "''",
    height: "2px",
    transition: "0.3s",
    position: "absolute",
    backgroundColor: theme.colors.primary.main
  }
}));
