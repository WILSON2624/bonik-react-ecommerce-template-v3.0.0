import styled from "styled-components";
// GLOBAL CUSTOM COMPONENTS
import { Button } from "@component/buttons";
import { H1, H4, Paragraph, Span } from "@component/Typography";
// UTILS
import { deviceSize } from "@utils/constants";

// STYLED COMPONENTS
const CarouselCard = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "img"
})<{ img: string }>(({ img }) => ({
  minHeight: 500,
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundColor: "#fff",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${img})`,

  [`@media(max-width: ${deviceSize.sm}px)`]: {
    padding: 24,
    textAlign: "center",
    justifyContent: "center",
    "& button": { margin: "auto" }
  },

  [`@media(min-width: ${deviceSize.sm}px)`]: {
    "& .hero-content": { paddingLeft: "5rem" }
  }
}));

// =============================================================
interface Props {
  img: string;
  title: string;
  category: string;
  discount: number;
  buttonText: string;
  description: string;
}
// =============================================================

export default function CarouselCard3(props: Props) {
  const { img, title, category, discount, description, buttonText } = props;

  return (
    <CarouselCard img={img}>
      <div className="hero-content">
        <H4 mb={1} fontSize={30} lineHeight={1} fontWeight={400} textTransform="uppercase">
          {title}
        </H4>

        <H1 fontSize={60} lineHeight={1} textTransform="uppercase">
          {category}
        </H1>

        <H4 fontSize={30} lineHeight={1} mt=".75rem" textTransform="uppercase">
          SALE UP TO <Span color="primary.main">{discount}% OFF</Span>
        </H4>

        <Paragraph fontSize={18} mb="2rem">
          {description}
        </Paragraph>

        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </div>
    </CarouselCard>
  );
}
