import { Children, cloneElement, ReactElement } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

import { isValidProp } from "@utils/utils";
import { RadioProps } from "./index";

// STYLED COMPONENT
const StyledRadioGroup = styled.fieldset.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<HTMLFieldSetElement | SpaceProps>`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  ${space}
`;

// ==============================================================
export interface RadioGroupProps extends SpaceProps {
  children: ReactElement<RadioProps>[];
  name: string;
  value?: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// ==============================================================

const RadioGroup = ({ name, value, children, onChange, ...props }: any) => {
  return (
    <StyledRadioGroup {...props}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          name,
          onChange,
          id: index,
          checked: value ? child.props.value === value : undefined
        });
      })}
    </StyledRadioGroup>
  );
};

export default RadioGroup;
