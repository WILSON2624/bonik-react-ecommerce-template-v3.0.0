"use client";

import styled from "styled-components";
import Icon from "@component/icon/Icon";

// STYLED COMPONENTS
export const ImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    "::before": { opacity: 0.6 },
    "& svg": { opacity: 1, transform: "rotate(0deg) scale(1)", zIndex: 2 }
  },
  "::before": {
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "all 0.3s",
    backgroundColor: theme.colors.secondary.main
  }
}));

export const StyledIcon = styled(Icon)({
  inset: 0,
  zIndex: 2,
  margin: "auto",
  color: "#fff",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    opacity: 0,
    transition: "all 0.3s",
    transform: "rotate(90deg) scale(2)"
  }
});
