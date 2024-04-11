"use client";

import styled from "styled-components";

import Card from "@component/Card";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENT
export const StyledCard = styled(Card)({
  marginBottom: 40,
  padding: "50px",
  background: "#efefef",
  transition: "all 0.3s",
  [`@media (max-width: ${deviceSize.md}px)`]: {
    margin: "auto",
    padding: "30px 20px",
    "& .content": { marginBottom: "30px" },
    "& h1": { fontSize: 25 }
  }
});
