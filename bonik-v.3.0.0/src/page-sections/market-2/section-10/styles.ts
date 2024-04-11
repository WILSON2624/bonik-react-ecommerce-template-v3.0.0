"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENT
export const ButtonsWrapper = styled("div")({
  gap: "1rem",
  display: "flex",
  flexWrap: "wrap",
  "& button": { flexGrow: 1 },
  [`@media (max-width: ${deviceSize.md}px)`]: { marginTop: "1rem" }
});
