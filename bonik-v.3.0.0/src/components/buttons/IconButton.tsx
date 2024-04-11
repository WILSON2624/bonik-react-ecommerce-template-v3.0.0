"use client";

import {
  color,
  space,
  border,
  layout,
  shadow,
  compose,
  variant,
  ColorProps,
  SpaceProps,
  BorderProps,
  BackgroundProps
} from "styled-system";
import { forwardRef } from "react";
import styled from "styled-components";
import systemCss from "@styled-system/css";
import { isValidProp } from "@utils/utils";

// ==============================================================
interface IconButtonProps {
  size?: "small" | "medium" | "large" | "none";
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "default" | string;
}

type Props = ColorProps & BackgroundProps & BorderProps & SpaceProps & IconButtonProps;
// ==============================================================

const StyledIconButton = styled.button.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<Props>(
  systemCss({
    flex: "0 0 auto",
    border: "none",
    outline: "none",
    lineHeight: 1,
    cursor: "pointer",
    textAlign: "center",
    borderRadius: "50%",
    padding: "1rem",
    fontWeight: 600,
    color: "inherit",
    bg: "body.paper",
    "&:hover": { bg: "gray.200" },
    transition: "all 150ms ease-in-out",
    "&:disabled": { bg: "text.disabled", color: "text.muted" }
  }),
  (props) =>
    variant({
      prop: "variant",
      variants: {
        text: { border: "none", color: `${props.color}.main` },
        outlined: {
          color: `${props.color}.main`,
          border: "2px solid",
          borderColor: `${props.color}.main`,
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${props.theme.colors[props.color as any]?.main}`
          }
        },
        contained: {
          border: "none",
          bg: `${props.color}.main`,
          color: `${props.color}.text`,
          "&:hover": { bg: `${props.color}.main` },
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${props.theme.colors[props.color as any]?.main}`
          }
        }
      }
    }),
  variant({
    prop: "size",
    variants: {
      medium: { padding: "1rem" },
      large: { padding: "1.25rem" },
      small: { padding: "0.75rem" }
    }
  }),
  compose(color, layout, space, border, shadow)
);

// ==============================================================
interface BtnProps extends Props {
  children: React.ReactNode;
  as?: string | React.ComponentType<any>;
}
// ==============================================================

const IconButton = forwardRef<
  HTMLButtonElement,
  BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, size = "small", ...props }, ref) => {
  return (
    <StyledIconButton ref={ref} size={size} {...props}>
      {children}
    </StyledIconButton>
  );
});

export default IconButton;
