"use client";

import Link from "next/link";
import styled from "styled-components";
import Card from "@component/Card";

const COMMON_BOX_STYLE = {
  height: 230,
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  alignItems: "center"
};

// styled components
export const LeftContentBox = styled(Card)(({ theme }) => ({
  ...COMMON_BOX_STYLE,
  background: theme.colors.marron[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer Card.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right bottom"
}));

export const RightContentBox = styled(Card)(({ theme }) => ({
  ...COMMON_BOX_STYLE,
  background: theme.colors.marron[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer 1.png')",
  backgroundSize: "contain",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  display: "block"
}));

export const RightContent = styled("div")({
  paddingLeft: 48,
  "& p": { fontSize: 13, lineHeight: 1.4 }
});

export const StyledLink = styled(Link)({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  textDecoration: "underline"
});
