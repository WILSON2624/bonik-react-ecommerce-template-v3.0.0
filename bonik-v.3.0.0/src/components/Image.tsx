"use client";

import styled from "styled-components";
import { border, BorderProps, layout, LayoutProps, space, SpaceProps } from "styled-system";
import { isValidProp } from "@utils/utils";

const Image = styled.img.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<SpaceProps & BorderProps & LayoutProps>`
  ${space}
  ${border}
  ${layout}
`;

export default Image;
