"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
export const CarouselBox = styled("div")(({ theme }) => ({
  overflow: "hidden",
  borderRadius: 3,
  "& .carousel__dot-group": {
    left: 0,
    right: 0,
    bottom: 10,
    marginTop: 0,
    position: "absolute",
    "& div": {
      borderColor: theme.colors.primary.main,
      "&::after": { backgroundColor: theme.colors.primary.main }
    }
  }
}));

export const CardWrapper = styled("div")({
  gap: "1.25rem",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    flexDirection: "row"
  },
  [`@media(max-width: ${deviceSize.xs}px)`]: {
    flexDirection: "column",
    width: "100%"
  }
});
