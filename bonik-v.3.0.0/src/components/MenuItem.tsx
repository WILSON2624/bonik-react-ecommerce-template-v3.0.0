import styled from "styled-components";
import { color, ColorProps, space, SpaceProps } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const MenuItem = styled.div<ColorProps & SpaceProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 0.5rem 1rem;
  word-break: break-all;
  color: ${themeGet("colors.text.secondary")};

  &:hover {
    color: ${themeGet("colors.primary.main")};
    background-color: ${themeGet("colors.gray.100")};
  }
  ${color}
  ${space}
`;

export default MenuItem;
