"use client";

import { TextareaHTMLAttributes } from "react";
import { BorderProps, SpaceProps } from "styled-system";
import { colorOptions } from "interfaces";
import { SyledTextArea, TextAreaWrapper } from "./styles";

// ==============================================================
export interface TextAreaProps
  extends SpaceProps,
    BorderProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelColor?: colorOptions;
  label?: string;
  errorText?: any;
  id?: any;
  fullwidth?: boolean;
}
// ==============================================================

export default function TextArea({
  id = "textArea",
  label,
  errorText,
  labelColor,
  color = "default",
  ...props
}: TextAreaProps) {
  // extract spacing props
  let spacingProps = {};
  let otherProps = {};

  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p")) spacingProps[key] = props[key];
    else otherProps[key] = props[key];
  }

  return (
    <TextAreaWrapper
      color={color || (labelColor && `${labelColor}.main`)}
      fullwidth={props.fullwidth}
      {...spacingProps}>
      {label && <label htmlFor={id}>{label}</label>}
      <SyledTextArea id={id} {...otherProps} />
      {errorText && <small>{errorText}</small>}
    </TextAreaWrapper>
  );
}
