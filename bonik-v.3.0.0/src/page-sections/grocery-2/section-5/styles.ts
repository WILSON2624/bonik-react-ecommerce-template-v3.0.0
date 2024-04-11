"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

export const Wrapper = styled.div`
  .carousel-card {
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    padding: 64px 72px;

    @media only screen and (max-width: ${deviceSize.sm}px) {
      padding: 1rem 1rem;
    }
  }
`;
