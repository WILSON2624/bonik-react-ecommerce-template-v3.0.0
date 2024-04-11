"use client";

import styled from "styled-components";
import { Button } from "@component/buttons";

// STYLED COMPONENTS
export const StyledButton = styled(Button)({
  margin: "auto",
  borderRadius: 0,
  padding: "1rem 2rem",
  "&:focus": { boxShadow: "none" }
});

export const StyledRoot = styled("div")(({ theme }) => ({
  color: "#fff",
  marginTop: "4rem",
  textAlign: "center",
  padding: "6rem 2rem",
  alignItems: "center",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: theme.colors.gray[500],
  backgroundImage: "url(/assets/images/banners/banner-11.jpg)"
}));
