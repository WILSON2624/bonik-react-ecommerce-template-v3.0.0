import { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import { color, compose, space, SpaceProps } from "styled-system";
import systemCss from "@styled-system/css";

import { colorOptions } from "../interfaces";
import { isValidProp } from "@utils/utils";

// ==============================================================
type CheckBoxProps = {
  color?: colorOptions;
  labelColor?: colorOptions;
  labelPlacement?: "start" | "end";
  label?: any;
  id?: any;
  size?: number;
};
// ==============================================================

type WrapperProps = { labelPlacement?: "start" | "end" };

const StyledCheckBox = styled.input.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<CheckBoxProps & InputHTMLAttributes<HTMLInputElement>>(
  ({ color, size }) =>
    systemCss({
      /* remove standard background appearance */
      // "-webkit-appearance": "none",
      // "-moz-appearance": "none",
      // "-webkit-user-select": "none",
      // "-moz-user-select": "none",
      // "-ms-user-select": "none",
      // "user-select": "none",
      appearance: "none",
      outline: "none",
      cursor: "pointer",

      margin: 0,
      width: size,
      height: size,
      border: "2px solid",
      borderColor: "text.hint",
      borderRadius: 2,
      position: "relative",

      "&:checked": { borderColor: `${color}.main` },

      /* create custom radiobutton appearance */
      "&:after": {
        width: "calc(100% - 5px)",
        height: "calc(100% - 5px)",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        position: "absolute",
        bg: "transparent",
        content: '" "',
        visibility: "visible",
        borderRadius: 1,
        transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      },

      /* appearance for checked radiobutton */
      "&:checked:after": {
        bg: `${color}.main`
      },

      "&:disabled": {
        borderColor: `text.disabled`
      },

      "&:checked:disabled:after": {
        bg: `text.disabled`
      }
    }),
  compose(color)
);

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<WrapperProps & SpaceProps>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.labelPlacement !== "end" ? "row" : "row-reverse")};
  input {
    ${(props) => (props.labelPlacement !== "end" ? "margin-right: 0.5rem" : "margin-left: 0.5rem")};
  }
  label {
    cursor: pointer;
  }
  input[disabled] + label {
    /* color: text.disabled; */
    color: disabled;
    cursor: unset;
  }

  ${color}
  ${space}
`;

const CheckBox = ({
  id,
  label,
  labelPlacement,
  labelColor = "secondary",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & CheckBoxProps & SpaceProps) => {
  const [checkboxId, setCheckboxId] = useState(id);

  // extract spacing props
  let spacingProps: any = {};
  for (const key in props) {
    const propKey = key as "color" | "size";
    if (key.startsWith("m") || key.startsWith("p")) spacingProps[propKey] = props[propKey];
  }

  useEffect(() => setCheckboxId(Math.random()), []);

  return (
    <Wrapper
      size={18}
      color={`${labelColor}.main`}
      labelPlacement={labelPlacement}
      {...spacingProps}>
      <StyledCheckBox id={checkboxId} type="checkbox" {...props} />
      <label htmlFor={checkboxId}>{label}</label>
    </Wrapper>
  );
};

export default CheckBox;
