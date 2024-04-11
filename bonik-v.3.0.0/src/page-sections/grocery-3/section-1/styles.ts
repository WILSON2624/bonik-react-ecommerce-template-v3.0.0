"use client";

import styled from "styled-components";

import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";

// styled components
export const StyledBox = styled("div")`
  margin-bottom: 60px;
  overflow: hidden;
  & .carousel-dot {
    left: 0;
    right: 0;
    bottom: 30px;
    margin: auto;
    position: absolute;
  }
`;

export const StyledGrid = styled(Grid)`
  margin: 0 auto;
  max-width: 1280px;
  align-items: center;
  @media (max-width: ${deviceSize.sm}px) {
    flex-direction: column-reverse;
  }
`;

export const GridItemTwo = styled(Grid)`
  padding-left: 80px;
  @media (max-width: ${deviceSize.md}px) {
    padding-left: 40px;
  }
  @media (max-width: ${deviceSize.sm}px) {
    width: 100%;
    padding-left: 0px;
    text-align: center;
  }
`;

export const StyledButton = styled(Button)`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
`;

export const GridItemOne = styled(Grid)`
  & .img {
    padding-top: 68px;
  }
  @media (max-width: ${deviceSize.sm}px) {
    width: 100%;
    padding-top: 0px;
  }
`;

export const TextBox = styled("div")`
  max-width: 400px;
  & h1 {
    font-size: 50px;
    font-weight: 600;
    line-height: 1.35;
    margin-bottom: 40px;
  }
  @media (max-width: ${deviceSize.lg}px) {
    & h1 {
      font-size: 45px;
    }
  }
  @media (max-width: ${deviceSize.md}px) {
    padding: 30px;
    max-width: 100%;
    & h1 {
      font-size: 38px;
    }
  }
  @media (max-width: ${deviceSize.sm}px) {
    max-width: 100%;
    text-align: center;
    & button {
      margin: auto;
    }
  }
`;
