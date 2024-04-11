"use client";

import Box from "@component/Box";
import styled from "styled-components";

const HoverBox = styled(Box)`
  overflow: hidden;
  position: relative;
  &:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    content: " ";
    position: absolute;
    transition: all 250ms ease-in-out;
  }
  &:hover:after {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default HoverBox;
