"use client";

import styled from "styled-components";

import FlexBox from "@component/FlexBox";
import { deviceSize } from "@utils/constants";

export const Wrapper = styled.div`
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;

  .carousel-dot {
    left: 72px;
    bottom: 40px;
    position: absolute;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    .carousel-dot {
      left: 1rem;
      bottom: 0.75rem;
    }
  }
`;

export const ContentWrapper = styled(FlexBox)`
  align-items: center;

  .card__inner-box {
    padding: 40px 0px 97px 72px;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .card__inner-box {
      padding: 1rem 1rem 4rem;
    }

    .card__img {
      margin-top: 1rem;
    }
  }
`;
