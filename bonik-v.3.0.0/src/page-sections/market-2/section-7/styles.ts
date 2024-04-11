"use client";

import styled from "styled-components";
import { isValidProp } from "@utils/utils";

// STYLED COMPONENTS
export const BannerBox = styled("div").withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<{ img: string }>(({ img }) => ({
  padding: 32,
  overflow: "hidden",
  borderRadius: "3px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${img})`
}));
