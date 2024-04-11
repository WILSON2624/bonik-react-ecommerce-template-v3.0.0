import styled from "styled-components";
import { color } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { colorOptions } from "interfaces";
import { isValidProp } from "@utils/utils";

// STYLED COMPONENT
const StyledLinearProgress = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<LinearProgressProps>`
  display: flex;
  overflow: hidden;
  position: relative;
  height: ${(props) => props.thickness}px;
  background-color: ${themeGet("colors.text.hint")};
  border-radius: ${(props) => props.thickness}px;

  &:after {
    top: 0;
    bottom: 0;
    content: " ";
    position: absolute;
    width: ${(props) => props.value}%;
    background-color: ${(props) => themeGet(`colors.${props.color}.main`)};
  }

  ${color}
`;

// ==============================================================
interface LinearProgressProps {
  style?: object;
  value?: number;
  thickness?: number;
  color?: colorOptions;
  variant?: "determinate" | "indeterminate";
}
// ==============================================================

export default function LinearProgress(props: LinearProgressProps) {
  return (
    <StyledLinearProgress
      variant="determinate"
      color="primary"
      thickness={6}
      value={75}
      {...props}
    />
  );
}
