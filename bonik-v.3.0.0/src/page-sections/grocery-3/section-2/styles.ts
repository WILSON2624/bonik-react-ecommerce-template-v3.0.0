"use client";

import styled from "styled-components";

import Card from "@component/Card";
import { deviceSize } from "@utils/constants";

// styled components
export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "center",
  background: theme.colors.paste[50],
  [`@media (max-width: ${deviceSize.sm}px)`]: {
    padding: "20px 30px",
    "& h3": { fontSize: 20 }
  }
}));
