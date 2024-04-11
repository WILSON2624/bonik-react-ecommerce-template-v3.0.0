"use client";

import styled from "styled-components";

import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";

export const ContentBox = styled(Card)({
  height: "100%",
  display: "flex",
  borderRadius: 8,
  overflow: "hidden",
  alignItems: "stretch",
  "& .content": {
    width: "50%",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center"
  }
});

export const RightContent = styled(FlexBox)(({ theme }) => ({
  width: "50%",
  height: "auto",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "0px 50% 50% 0px",
  background: theme.colors.primary[200],
  "& p": { fontSize: 13, lineHeight: 1.4 }
}));

export const LeftContent = styled(Box)({
  width: "50%",
  height: "auto",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  "& img": { width: "90%" },

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    "& img": { width: "100%" }
  }
});

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "16px",
  padding: "4px 12px",
  background: theme.colors.primary.main,
  "&:hover": { background: theme.colors.primary[400] }
}));
