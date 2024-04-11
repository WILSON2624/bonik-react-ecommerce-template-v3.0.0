"use client";

import Link from "next/link";
import styled from "styled-components";

import Box from "@component/Box";
import { deviceSize } from "@utils/constants";
import { getTheme } from "@utils/utils";

// STYLED COMPONENTS
export const StyledLink = styled(Link)`
  z-index: 999;
  display: block;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  padding: 0.35rem 0rem;
  color: ${getTheme("colors.gray.500")};
  &:hover {
    color: ${getTheme("colors.gray.100")};
  }
`;

export const StyledBox = styled(Box)`
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: ${deviceSize.sm}px) {
    margin-right: unset;
    margin-left: unset;
  }
`;

export const Wrapper = styled(Box)`
  color: white;
  padding: 40px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #0f3460;

  @media only screen and (max-width: 900px) {
    margin-bottom: 3.75rem;
  }
`;
