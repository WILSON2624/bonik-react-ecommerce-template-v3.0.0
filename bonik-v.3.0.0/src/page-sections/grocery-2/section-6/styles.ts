"use client";

import styled from "styled-components";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENT
export const Wrapper = styled.div`
  .quote {
    position: absolute;

    & > div {
      height: 4rem;
      width: 4rem;
    }
  }
  .quote-open {
    left: 0;
    top: 0;
  }
  .quote-close {
    right: 0;
    bottom: 0;
  }

  .quote-content {
    padding: 3.5rem 6rem;
  }

  .avatar {
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    margin-right: 2.5rem;
    transform: rotate(-15deg);
  }

  .carousel-card {
    position: relative;
    padding: 2.25rem 5rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    .carousel-card {
      padding: 1rem 1rem;
    }
    .quote {
      & > div {
        height: 2rem;
        width: 2rem;
      }
    }
    .content {
      padding: 1.25rem 3rem;
    }
  }
`;
