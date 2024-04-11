import styled from "styled-components";

// STYLED COMPONENT
const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary.light};
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
  }
`;

export default function Slider() {
  return <StyledSlider type="range" min={0} max={100} />;
}
