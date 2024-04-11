import styled from "styled-components";
import systemCss from "@styled-system/css";
import { color, compose, space, variant } from "styled-system";

import { isValidProp } from "@utils/utils";
import { colorOptions } from "interfaces";

// ==============================================================
interface Props {
  size?: string;
  transform?: string;
  color?: colorOptions;
  variant?: "small" | "medium" | "large";
  defaultcolor?: "currentColor" | "auto";
}
// ==============================================================

export const StyledSvgWrapper = styled("div").withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<Props>(
  ({ color, size, transform, defaultcolor }) =>
    systemCss({
      svg: {
        transform,
        width: "100%",
        height: "100%",
        path: { fill: color ? `${color}.main` : defaultcolor },
        polyline: { color: color ? `${color}.main` : defaultcolor },
        polygon: { color: color ? `${color}.main` : defaultcolor }
      },

      div: { display: "flex", width: size, height: size }
    }),
  ({ size }) =>
    variant({
      prop: "variant",
      variants: {
        large: { div: { width: size || "2rem", height: size || "2rem" } },
        medium: { div: { width: size || "1.5rem", height: size || "1.5rem" } },
        small: { div: { width: size || "1.25rem", height: size || "1.25rem" } }
      }
    }),
  compose(color, space)
);
