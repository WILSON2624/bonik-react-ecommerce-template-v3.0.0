"use client";

import styled from "styled-components";
import Container from "@component/Container";

// STYLED COMPONENT
export const Wrapper = styled(Container)`
  @media only screen and (max-width: 400px) {
    .flex {
      width: 100%;
      padding-bottom: 1rem;
      justify-content: center;
    }
  }
`;
