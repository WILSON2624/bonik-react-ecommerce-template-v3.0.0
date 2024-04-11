"use client";

import {
  flex,
  space,
  color,
  border,
  layout,
  textStyle,
  typography,
  FlexProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
  TextStyleProps
} from "styled-system";
import styled, { CSSProperties } from "styled-components";
import { isValidProp } from "@utils/utils";

// ==============================================================
interface CustomProps
  extends TypographyProps,
    SpaceProps,
    ColorProps,
    FlexProps,
    LayoutProps,
    BorderProps,
    TextStyleProps {
  ref?: any;
  as?: any;
  title?: string;
  className?: string;
  ellipsis?: boolean;
  style?: CSSProperties;
  onClick?: (e: any) => void;
  [key: string]: any;
}
// ==============================================================

const Typography = styled.div.withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<CustomProps>`
  ${(props) =>
    props.ellipsis
      ? `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `
      : ""}

  ${flex}
  ${space}
  ${color}
  ${border}
  ${layout}
  ${textStyle}
  ${typography}
`;

export const H1 = (props: CustomProps) => (
  <Typography as="h1" mb="0" mt="0" fontSize="30px" {...props} />
);

export const H2 = (props: CustomProps) => (
  <Typography as="h2" mb="0" mt="0" fontSize="25px" {...props} />
);

export const H3 = (props: CustomProps) => (
  <Typography as="h3" mb="0" mt="0" fontSize="20px" {...props} />
);

export const H4 = (props: CustomProps) => (
  <Typography as="h4" mb="0" mt="0" fontWeight="600" fontSize="17px" {...props} />
);

export const H5 = (props: CustomProps) => (
  <Typography as="h5" mb="0" mt="0" fontWeight="600" fontSize="16px" {...props} />
);

export const H6 = (props: CustomProps) => (
  <Typography as="h6" mb="0" mt="0" fontWeight="600" fontSize="14px" {...props} />
);

export const Paragraph = (props: CustomProps) => <Typography as="p" mb="0" mt="0" {...props} />;

export const Span = (props: CustomProps) => <Typography as="span" fontSize="16px" {...props} />;

export const SemiSpan = (props: CustomProps) => (
  <Typography as="span" fontSize="14px" color="text.muted" {...props} />
);

export const Small = (props: CustomProps) => <Typography as="span" fontSize="12px" {...props} />;

export const Tiny = (props: CustomProps) => <Typography as="span" fontSize="10px" {...props} />;

export default Typography;
