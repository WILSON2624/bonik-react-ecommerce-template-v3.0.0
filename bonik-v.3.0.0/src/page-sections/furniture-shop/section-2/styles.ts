"use client";

import styled from "styled-components";
import Box from "@component/Box";
import { theme } from "@utils/theme";
import { isValidProp } from "@utils/utils";

// styled components
export const ContentBox = styled(Box).withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<{ imgUrl: string }>(({ imgUrl, theme }) => ({
  height: 230,
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  alignItems: "center",
  background: theme.colors.paste[50],
  backgroundImage: `url('${imgUrl}')`,
  backgroundOrigin: "content-box",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain"
}));

export const LeftContentBox = styled(ContentBox)({
  backgroundPosition: "right bottom"
});

export const RightContentBox = styled(ContentBox)({
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundPosition: "bottom"
});

export const RightContent = styled(Box)({
  padding: 24,
  "& p": { fontSize: 13, lineHeight: 1.4 }
});

export const StyledButton = styled("button")({
  all: "unset",
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  textDecoration: "underline",
  "&:hover": { color: theme.colors.primary.main }
});
