"use client";

import styled from "styled-components";
import {
  color,
  space,
  border,
  layout,
  flexbox,
  FlexProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
  GridGapProps
} from "styled-system";

import Box from "./Box";
import { isValidProp } from "@utils/utils";

// ==============================================================
type FlexBoxProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  GridGapProps &
  FlexProps;
// ==============================================================

const FlexBox = styled(Box).withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<FlexBoxProps>`
  display: flex;
  flex-direction: row;
  ${color}
  ${space}
  ${layout}
  ${border}
  ${flexbox}
`;

export default FlexBox;
