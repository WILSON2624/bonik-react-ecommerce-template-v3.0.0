"use client";

import styled from "styled-components";
import { color, ColorProps, layout, LayoutProps, space, SpaceProps } from "styled-system";
import { isValidProp } from "@utils/utils";

const Divider = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<SpaceProps & LayoutProps & ColorProps>`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  ${color}
  ${space}
  ${layout}
`;

export default Divider;
