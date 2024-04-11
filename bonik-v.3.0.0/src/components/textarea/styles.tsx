import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import systemCss from "@styled-system/css";
import { convertHexToRGB, isValidProp } from "@utils/utils";
import { border, color, ColorProps, compose, space, SpaceProps } from "styled-system";

interface Props extends SpaceProps, ColorProps {
  fullwidth?: boolean;
}

export const SyledTextArea = styled.textarea.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<InputHTMLAttributes<HTMLInputElement> & Props>(
  (props) =>
    systemCss({
      display: "block",
      padding: "8px 12px",
      minHeight: "40px",
      fontSize: "inherit",
      color: "body.text",
      borderRadius: 5,
      border: "1px solid",
      borderColor: "text.disabled",
      width: props.fullwidth ? "100%" : "inherit",
      outline: "none",
      overflow: "auto",
      fontFamily: "inherit",

      "&:hover": {
        borderColor: "gray.500"
      },
      "&:focus": {
        outlineColor: "primary.main",
        borderColor: "primary.main",
        boxShadow: `1px 1px 8px 4px rgba(${convertHexToRGB(props.theme.colors.primary.light)}, 0.1)`
      }
    }),
  compose(color, border)
);

export const TextAreaWrapper = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<Props>(
  (props) =>
    systemCss({
      width: props.fullwidth ? "100%" : "inherit",

      "& label": {
        display: "block",
        marginBottom: "0.5rem",
        fontSize: "0.875rem",
        color: "text.hint"
      },

      "& small": {
        display: "block",
        color: "error.main",
        marginTop: "0.25rem",
        marginLeft: "0.25rem"
      }
    }),
  compose(color, space)
);
