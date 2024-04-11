import Link from "next/link";
import { CSSProperties } from "react";
import styled from "styled-components";
// GLOBAL CUSTOM COMPONENTS
import Image from "@component/Image";
import Divider from "@component/Divider";
import { H2, Paragraph, Span } from "@component/Typography";
// UTILS
import { isValidProp } from "@utils/utils";

// STYLED COMPONENTS
const CardWrapper = styled("div")({
  maxHeight: 240,
  overflow: "hidden",
  borderRadius: "10px",
  position: "relative",
  "& img": { transition: "0.3s" },
  "&:hover": { img: { transform: "scale(1.1)" } }
});

const CardContent = styled("div").withConfig({
  shouldForwardProp: (prop) => isValidProp(prop)
})<{ contentAlign: "right" | "left" | null }>(({ contentAlign }) => ({
  top: 0,
  zIndex: 1,
  color: "#fff",
  height: "100%",
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  ...(contentAlign === "left" ? { left: 32 } : { right: 32, alignItems: "flex-end" })
}));

const CardLink = styled(Span)({
  fontSize: 14,
  color: "white",
  position: "relative",
  paddingBottom: "2px",
  textTransform: "uppercase",
  "&:hover::after": { width: "100%" },
  "&:after": {
    left: 0,
    bottom: 0,
    width: "0%",
    content: "''",
    height: "2px",
    transition: "0.3s",
    position: "absolute",
    backgroundColor: "white"
  }
});

// ========================================================
type BannerCard1Props = {
  img: string;
  url: string;
  title: string;
  subTitle: string;
  style?: CSSProperties;
  contentPosition?: "left" | "right";
};
// ========================================================

export default function BannerCard1({
  img,
  url,
  title,
  subTitle,
  style = {},
  contentPosition = "left"
}: BannerCard1Props) {
  return (
    <CardWrapper style={style}>
      <Image alt="category" height="100%" width="100%" src={img} />

      <CardContent contentAlign={contentPosition ? contentPosition : null} className="content">
        <H2>{title}</H2>
        <Paragraph>{subTitle}</Paragraph>
        <Divider height={2} my="1rem" width={50} />

        <Link href={url}>
          <CardLink>Shop Now</CardLink>
        </Link>
      </CardContent>
    </CardWrapper>
  );
}
