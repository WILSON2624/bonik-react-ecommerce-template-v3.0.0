"use client";

import { useState, useEffect, cloneElement, InputHTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

import Box from "../Box";
import { colorOptions } from "../../interfaces";
import { SyledTextField, TextFieldWrapper } from "./styles";

// ==============================================================
export interface TextFieldProps {
  labelColor?: colorOptions;
  label?: string;
  errorText?: any;
  id?: any;
  fullwidth?: boolean;
  endAdornment?: any;
}
// ==============================================================

const TextField = ({
  id,
  label,
  errorText,
  labelColor,
  endAdornment,
  color = "default",
  ...props
}: (InputHTMLAttributes<HTMLInputElement> & TextFieldProps & SpaceProps) | any) => {
  const [textId, setTextId] = useState(id);

  // extract spacing props
  let spacingProps: { [key: string]: any } = {};
  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p")) spacingProps[key] = props[key];
  }

  useEffect(() => {
    if (!id) setTextId(Math.random());
  }, []);

  return (
    <TextFieldWrapper
      color={color || (labelColor && `${labelColor}.main`)}
      fullwidth={props.fullwidth}
      {...spacingProps}>
      {label && <label htmlFor={textId}>{label}</label>}
      <Box position="relative">
        <SyledTextField id={textId} {...props} />
        {endAdornment &&
          cloneElement(endAdornment, { className: `end-adornment ${endAdornment.className}` })}
      </Box>
      {errorText && <small>{errorText}</small>}
    </TextFieldWrapper>
  );
};

export default TextField;
