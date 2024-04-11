import { ReactNode } from "react";
import styled from "styled-components";
import { FlexProps } from "styled-system";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Image from "@component/Image";

// STYLED COMPONENTS
const CardWrapper = styled(Box)({
  width: "100%",
  overflow: "hidden",
  position: "relative"
});

const CardContent = styled("div")({
  top: 0,
  left: 32,
  zIndex: 1,
  height: "100%",
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center"
});

// ===========================================================
interface BannerCard1Props extends FlexProps {
  img: string;
  children: ReactNode;
}
// ===========================================================

export default function BannerCard3({ img, children, ...props }: BannerCard1Props) {
  return (
    <CardWrapper {...props}>
      <Image alt="category" height="100%" width="100%" src={img} />
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
}
