"use client";

import styled from "styled-components";

import Card from "@component/Card";
import { deviceSize } from "utils/constants";
import { isValidProp } from "@utils/utils";

export const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<{ imgUrl?: string }>`
  padding: 62px 78px;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ),
    url(${(props) => props.imgUrl});
  background-size: cover;

  @media only screen and (max-width: ${deviceSize.sm}px) {
    padding: 2rem;
  }
`;
