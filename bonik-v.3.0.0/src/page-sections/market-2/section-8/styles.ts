"use client";

import styled from "styled-components";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
export const BannerWrapper = styled("div")({
  gap: "5rem",
  padding: "2rem",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  borderRadius: "3px",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "flex-end",
  backgroundPosition: "center left",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(/assets/images/banners/long-banner.jpg)`,

  "& .content": { textAlign: "center" },

  [`@media (max-width: ${deviceSize.md}px)`]: {
    gap: "1rem",
    flexDirection: "column",
    justifyContent: "center"
  }
});

export const StyledButton = styled(Button)({
  borderRadius: 0,
  backgroundColor: "white",
  "&:focus": { boxShadow: "none" }
});
