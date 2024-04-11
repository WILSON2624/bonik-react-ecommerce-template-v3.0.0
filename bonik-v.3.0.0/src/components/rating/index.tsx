"use client";

import { FC, useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import { colorOptions } from "interfaces";
import StyledRating from "./styles";
import Star from "./Star";

// ==============================================================
export interface RatingProps {
  value?: number;
  outof?: number;
  readOnly?: boolean;
  className?: string;
  color?: colorOptions;
  style?: CSSProperties;
  onChange?: (value: number) => void;
  size?: "small" | "medium" | "large";
}
// ==============================================================

export default function Rating({
  onChange,
  value = 0,
  outof = 5,
  readOnly = true,
  color = "secondary",
  ...props
}: RatingProps) {
  const [state, setState] = useState<number>(value as number);

  let fullStar = parseInt(state.toString());
  let halfStar = Math.ceil(state - fullStar);
  let emptyStar = (outof as number) - Math.ceil(state);
  let starList = [];

  const handleStarClick = (inputValue: any) => {
    if (!readOnly) {
      setState(inputValue);
      if (onChange) onChange(inputValue);
    }
  };

  useEffect(() => setState(value as number), [value]);

  for (let i = 0; i < fullStar; i++) {
    let inputValue = i + 1;

    starList.push(
      <Star key={i} value={5} color={color} onClick={() => handleStarClick(inputValue)} />
    );
  }

  for (let i = 0; i < halfStar; i++) {
    let inputValue = i + fullStar + 1;

    starList.push(
      <Star
        outof={10}
        color={color}
        key={inputValue}
        value={((state as number) - fullStar) * 10}
        onClick={() => handleStarClick(inputValue)}
      />
    );
  }

  for (let i = 0; i < emptyStar; i++) {
    let inputValue = i + halfStar + fullStar + 1;

    starList.push(
      <Star key={inputValue} value={0} color={color} onClick={() => handleStarClick(inputValue)} />
    );
  }

  return (
    <StyledRating color={color} value={state} readOnly={readOnly} {...props}>
      {starList}
    </StyledRating>
  );
}
