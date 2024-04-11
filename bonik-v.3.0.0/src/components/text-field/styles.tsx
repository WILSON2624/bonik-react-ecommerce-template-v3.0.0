import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { color, compose, space, SpaceProps } from "styled-system";
import systemCss from "@styled-system/css";
import { convertHexToRGB, isValidProp } from "@utils/utils";
import { TextFieldProps } from "./index";

export const SyledTextField = styled.input.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<InputHTMLAttributes<HTMLInputElement> & TextFieldProps>(
  (props) =>
    systemCss({
      padding: "8px 12px",
      height: "40px",
      fontSize: "inherit",
      color: "body.text",
      borderRadius: 5,
      border: "1px solid",
      borderColor: "text.disabled",
      width: props.fullwidth ? "100%" : "inherit",
      outline: "none",
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
  compose(color)
);

export const TextFieldWrapper = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<TextFieldProps & SpaceProps>(
  (props) =>
    systemCss({
      position: "relative",
      width: props.fullwidth ? "100%" : "inherit",

      label: {
        display: "block",
        marginBottom: "6px",
        fontSize: "0.875rem"
      },

      small: {
        display: "block",
        color: "error.main",
        marginTop: "0.25rem",
        marginLeft: "0.25rem"
      },

      ".end-adornment": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "0.25rem"
      }
    }),
  compose(color, space)
);
