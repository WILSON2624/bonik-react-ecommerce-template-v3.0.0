import styled from "styled-components";
import { compose, flexbox } from "styled-system";
import { isValidProp } from "@utils/utils";
import { GridProps } from "./types";

const StyledGrid = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<GridProps>(
  ({
    xl,
    lg,
    md,
    sm,
    xs,
    item,
    spacing,
    container,
    containerHeight,
    vertical_spacing,
    horizontal_spacing
  }) => {
    let mediaProps = { xl, lg, md, sm, xs };
    let style: any = {};

    if (container) {
      style = {
        display: "flex",
        flexWrap: "wrap",
        height: containerHeight,
        margin: spacing ? `-${(spacing / 2) * 0.25}rem` : "unset"
      };

      if (horizontal_spacing) {
        style.marginLeft = `-${(horizontal_spacing / 2) * 0.25}rem`;
        style.marginRight = `-${(horizontal_spacing / 2) * 0.25}rem`;
      }
      if (vertical_spacing) {
        style.marginTop = `-${(vertical_spacing / 2) * 0.25}rem`;
        style.marginBottom = `-${(vertical_spacing / 2) * 0.25}rem`;
      }
    } else if (item) {
      if (spacing) style.padding = `${(spacing / 2) * 0.25}rem`;

      if (horizontal_spacing) {
        style.paddingLeft = `${(horizontal_spacing / 2) * 0.25}rem`;
        style.paddingRight = `${(horizontal_spacing / 2) * 0.25}rem`;
      }

      if (vertical_spacing) {
        style.paddingTop = `${(vertical_spacing / 2) * 0.25}rem`;
        style.paddingBottom = `${(vertical_spacing / 2) * 0.25}rem`;
      }

      for (const key in mediaSize) {
        if (mediaProps[key]) {
          style = {
            ...style,
            [`@media only screen and (min-width: ${mediaSize[key]}px)`]: {
              width: `${(mediaProps[key] / 12) * 100}%`
            }
          };
        }
      }
    }

    return style;
  },
  compose(flexbox)
);

const mediaSize = {
  xs: 0,
  sm: 426,
  md: 769,
  lg: 1025,
  xl: 1441
};

export default StyledGrid;
