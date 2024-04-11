"use client";

import styled from "styled-components";

// STYLED COMPONENTS
export const Wrapper = styled("div")({
  overflow: "hidden",
  marginBottom: "1.5rem",
  "& .carousel__dot-group": {
    left: 0,
    right: 0,
    bottom: 10,
    marginTop: 0,
    position: "absolute",
    "& div": {
      borderColor: "#fff",
      "&::after": { backgroundColor: "#fff" }
    }
  }
});
