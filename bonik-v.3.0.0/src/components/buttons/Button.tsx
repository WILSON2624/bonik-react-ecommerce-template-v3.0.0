"use client";

import { forwardRef } from "react";
import systemCss from "@styled-system/css";
import styled from "styled-components";
import {
  color,
  space,
  border,
  layout,
  shadow,
  compose,
  variant,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  BackgroundProps
} from "styled-system";

import { isValidProp } from "@utils/utils";
import { colorOptions } from "interfaces";

// ==============================================================
interface ButtonProps {
  fullwidth?: boolean;
  color?: colorOptions;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large" | "none";
}

type Props = ColorProps & BackgroundProps & BorderProps & SpaceProps & ButtonProps & LayoutProps;
// ==============================================================

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<Props>(
  ({ color, fullwidth }) =>
    systemCss({
      display: "flex",
      width: fullwidth ? "100%" : "unset",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
      border: "none",
      cursor: "pointer",
      padding: "11px 1.5rem",
      fontSize: "1rem",
      fontWeight: 600,
      fontFamily: "inherit",
      color: color ? `${color}.main` : "body.text",
      background: "transparent",
      transition: "all 150ms ease-in-out",
      lineHeight: 1,
      "&:focus": { boxShadow: 3 },
      "&:disabled": {
        bg: "text.disabled",
        color: "text.hint",
        borderColor: "text.disabled",
        cursor: "unset",
        "svg path": { fill: "text.hint" },
        "svg polyline, svg polygon": { color: "text.hint" }
      }
    }),
  ({ theme, color }) =>
    variant({
      prop: "variant",
      variants: {
        text: {
          border: "none",
          color: `${color}.main`,
          "&:hover": {
            bg: color ? `${color}.light` : "gray.100"
          }
        },
        outlined: {
          padding: "10px 16px",
          color: `${color}.main`,
          border: "1px solid",
          borderColor: color ? `${color}.main` : "text.disabled",

          "&:enabled svg path": {
            fill: color ? `${theme.colors[color]?.main} !important` : "text.primary"
          },
          "&:enabled svg polyline, svg polygon": {
            color: color ? `${theme.colors[color]?.main} !important` : "text.primary"
          },
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color ? color : ""]?.light}`
          },
          "&:hover:enabled": {
            bg: color && `${color}.main`,
            borderColor: color && `${color}.main`,
            color: color && `${color}.text`,
            "svg path": {
              fill: color ? `${theme.colors[color]?.text} !important` : "text.primary"
            },
            "svg polyline, svg polygon": {
              color: color ? `${theme.colors[color]?.text} !important` : "text.primary"
            },
            ...(color === "dark" && { color: "white" })
          }
        },
        contained: {
          border: "none",
          color: `${color}.text`,
          bg: `${color}.main`,
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color ? color : ""]?.light}`
          },
          "&:enabled svg path": {
            fill: color ? `${theme.colors[color]?.text} !important` : "text.primary"
          },
          "&:enabled svg polyline, svg polygon": {
            color: color ? `${theme.colors[color]?.text} !important` : "text.primary"
          }
        }
      }
    }),
  variant({
    prop: "size",
    variants: {
      large: { height: "56px", px: 30 },
      medium: { height: "48px", px: 30 },
      small: { height: "40px", fontSize: 14 }
    }
  }),
  compose(color, layout, space, border, shadow)
);

interface BtnProps extends Props {
  children: React.ReactNode;
  as?: string | React.ComponentType<any>;
}

const Button = forwardRef<
  HTMLButtonElement,
  BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, size = "small", borderRadius = 5, ...props }, ref) => {
  return (
    <StyledButton ref={ref} size={size} borderRadius={borderRadius} {...props}>
      {children}
    </StyledButton>
  );
});

export default Button;
