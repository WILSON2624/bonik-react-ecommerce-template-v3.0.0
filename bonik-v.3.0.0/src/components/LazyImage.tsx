import { border, color, space, ColorProps, BorderProps, SpaceProps } from "styled-system";
import styled from "styled-components";
import NextImage, { ImageProps } from "next/image";

type LazyImageProps = ImageProps & BorderProps & SpaceProps & ColorProps;

const LazyImage = styled(({ borderRadius, ...props }: LazyImageProps) => {
  return <NextImage {...props} />;
})<ImageProps>`
  // display: block;
  ${color}
  ${space}
  ${border}
`;

export default LazyImage;
