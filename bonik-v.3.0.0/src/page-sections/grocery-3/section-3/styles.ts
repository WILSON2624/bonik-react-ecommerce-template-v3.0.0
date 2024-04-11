"use client";

import styled from "styled-components";
import { theme } from "@utils/theme";

// styled components
export const TitleBox = styled("div")`
  text-align: center;
  margin-block: 2rem;
  & h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & div {
    width: 200px;
    height: 2px;
    margin: auto;
    background-color: ${theme.colors.primary.main};
  }
`;
