"use client";

import { ReactNode } from "react";
import { BorderProps, ColorProps } from "styled-system";
// STYLED COMPONENT
import StyledAvatar from "./styles";

// ==============================================================
export interface AvatarProps extends BorderProps, ColorProps {
  src?: string;
  size?: number;
  children?: ReactNode;
  [key: string]: any;
}
// ==============================================================

export default function Avatar({ src, size = 48, children, ...props }: AvatarProps) {
  return (
    <StyledAvatar size={size} {...props}>
      {src && <img src={src} alt="avatar" />}
      {!src && children && <span>{children}</span>}
    </StyledAvatar>
  );
}
