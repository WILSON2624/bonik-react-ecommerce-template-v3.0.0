import styled from "styled-components";
// GLOBAL CUSTOM COMPONENTS
import { Button } from "@component/buttons";
import { H1, H4, Paragraph, Span } from "@component/Typography";
// UTILS FUNCTIONS
import { isValidProp } from "@utils/utils";
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
const CardWrapper = styled("div").withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<{ img: string; mode: string }>(({ img, mode, theme }) => ({
  minHeight: 500,
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${img})`,
  backgroundColor: mode === "dark" ? "#000" : "#fff",
  color: mode === "light" ? theme.colors.secondary.main : "#fff",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    padding: 24,
    textAlign: "center",
    backgroundImage: "none",
    justifyContent: "center"
  }
}));

const ContentWrapper = styled("div")({
  paddingLeft: "5rem",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    paddingLeft: 0,
    "& button": { margin: "auto" }
  }
});

// ===============================================================
interface CarouselCard2Props {
  title: string;
  bgImage?: string;
  category: string;
  discount: number;
  mode?: "dark" | "light";
}
// ===============================================================

export default function CarouselCard2({
  title,
  bgImage,
  category,
  discount,
  mode = "dark"
}: CarouselCard2Props) {
  return (
    <CardWrapper img={bgImage as string} mode={mode}>
      <ContentWrapper>
        <H4 mb={1} lineHeight={1} fontWeight={400} textTransform="uppercase" fontSize={30}>
          {title}
        </H4>

        <H1 fontSize={60} lineHeight={1} textTransform="uppercase">
          {category}
        </H1>

        <H4 fontSize={30} lineHeight={1} mt=".75rem" textTransform="uppercase">
          SALE UP TO <Span color="primary.main">{discount}% OFF</Span>
        </H4>

        <Paragraph fontSize={18} mb="2rem">
          Get Free Shipping on orders over $99.00
        </Paragraph>

        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </ContentWrapper>
    </CardWrapper>
  );
}
