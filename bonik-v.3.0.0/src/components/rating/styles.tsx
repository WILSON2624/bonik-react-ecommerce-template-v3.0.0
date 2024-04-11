import styled from "styled-components";
import systemCss from "@styled-system/css";
import { color, compose, variant } from "styled-system";

import { RatingProps } from "./index";
import { isValidProp } from "@utils/utils";

const StyledRating = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<RatingProps>(
  ({ readOnly }) =>
    systemCss({
      display: "flex",
      margin: "0px -1px",
      "& svg": { margin: "0px 1px", cursor: readOnly ? "default" : "pointer" }
    }),
  variant({
    prop: "size",
    variants: {
      small: { "& svg": { height: 16, width: 16 } },
      medium: { "& svg": { height: 20, width: 20 } },
      large: { "& svg": { height: 28, width: 28 } }
    }
  }),
  compose(color)
);

StyledRating.defaultProps = { size: "small" };

export default StyledRating;
