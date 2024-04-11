"use client";

import { ReactElement } from "react";
import styled from "styled-components";
import { compose, flex, space, SpaceProps } from "styled-system";
import { deviceOptions } from "../../interfaces";
import { deviceSize } from "@utils/constants";
import { isValidProp } from "@utils/utils";

// ==============================================================
export interface HiddenProps extends SpaceProps {
  down?: number | deviceOptions;
  up?: number | deviceOptions;
  [key: string]: unknown;
  children: ReactElement;
}
// ==============================================================

const StyledHidden = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<HiddenProps & SpaceProps>(({ up, down }) => {
  const upDeviceSize = deviceSize[up] || up;
  const downDeviceSize = deviceSize[down] || down;

  if (up) {
    return {
      [`@media only screen and (min-width: ${upDeviceSize + 1}px)`]: { display: "none" }
    };
  } else if (down) {
    return {
      [`@media only screen and (max-width: ${downDeviceSize}px)`]: { display: "none" }
    };
  } else {
    return { display: "none" };
  }
}, compose(space, flex));

export default function Hidden({ children, ...props }: HiddenProps) {
  return <StyledHidden {...props}>{children}</StyledHidden>;
}
