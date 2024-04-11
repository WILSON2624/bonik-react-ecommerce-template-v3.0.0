"use client";

import styled from "styled-components";
import {
  color,
  space,
  position,
  typography,
  ColorProps,
  SpaceProps,
  PositionProps,
  TypographyProps
} from "styled-system";
import { isValidProp } from "@utils/utils";

// ==============================================================
interface ChipProps extends SpaceProps, ColorProps, TypographyProps, PositionProps {
  cursor?: string;
  boxShadow?: string;
}
// ==============================================================

export const Chip = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<ChipProps>`
  display: inline-flex;
  border-radius: 300px;
  transition: all 150ms ease-in-out;
  cursor: ${(props) => props.cursor || "unset"};
  box-shadow: ${(props) => props.boxShadow || "unset"};
  ${space}
  ${color}
  ${position}
  ${typography}
`;
