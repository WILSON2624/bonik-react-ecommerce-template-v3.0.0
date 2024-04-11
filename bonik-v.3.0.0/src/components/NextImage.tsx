"use client";

import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import { space, SpaceProps, compose, borderRadius, BorderRadiusProps } from "styled-system";

// ==============================================================
type NextImageProps = ImageProps & SpaceProps & BorderRadiusProps;
// ==============================================================

const NextImage = styled(Image)<NextImageProps>(
  { width: "100%", height: "auto" },
  compose(space, borderRadius)
);

export default NextImage;
