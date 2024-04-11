import styled from "styled-components";
import { border, BorderProps, color, ColorProps, layout, space, SpaceProps } from "styled-system";
import { AvatarProps } from "./index";
import { isValidProp } from "@utils/utils";

type Props = AvatarProps & BorderProps & ColorProps & SpaceProps;

const StyledAvatar = styled.div.withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<Props>`
  display: block;
  font-weight: 600;
  overflow: hidden;
  position: relative;
  text-align: center;
  min-width: ${(props) => props.size}px;
  font-size: ${(props) => (props.size as number) / 2}px;
  border-radius: ${(props) => props.size}px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  & > * {
    top: 50%;
    left: 50%;
    line-height: 0;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  ${color}
  ${space}
  ${border}
  ${layout}
`;

export default StyledAvatar;
