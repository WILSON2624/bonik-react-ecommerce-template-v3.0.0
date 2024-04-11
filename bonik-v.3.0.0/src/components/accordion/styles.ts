import styled from "styled-components";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
// UTILS
import { isValidProp } from "@utils/utils";

// STYLED COMPONENT
export const AccordionWrapper = styled(Box)`
  cursor: pointer;
  overflow: hidden;
  transition: height 250ms ease-in-out;
`;

export const AccordionHeaderWrapper = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<{ open: boolean }>`
  align-items: center;
  justify-content: space-between;

  .caret-icon {
    transition: transform 250ms ease-in-out;
    transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;
