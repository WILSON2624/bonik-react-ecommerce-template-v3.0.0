"use client";

import styled from "styled-components";

import Card from "@component/Card";
import { isValidProp } from "@utils/utils";

export const Card1 = styled(Card).withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})`
  position: relative;
  padding: 1.5rem 1.75rem;
  @media only screen and (max-width: 678px) {
    padding: 1rem;
  }
`;
