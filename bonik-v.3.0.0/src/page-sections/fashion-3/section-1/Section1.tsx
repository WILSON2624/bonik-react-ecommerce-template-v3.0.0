import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import { CarouselCard2 } from "@component/carousel-cards";
import { MainCarouselItem } from "@models/market-2.model";
// STYLED COMPONENTS
import { Wrapper } from "./styles";

// ======================================================
type Props = { carouselData: MainCarouselItem[] };
// ======================================================

export default function Section1({ carouselData }: Props) {
  return (
    <Container pt="1.5rem">
      <Wrapper>
        <Carousel
          spacing="0px"
          totalSlides={2}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}>
          {carouselData.map((item, index) => (
            <CarouselCard2
              key={index}
              mode="dark"
              title={item.title}
              bgImage={item.imgUrl}
              category={item.category}
              discount={item.discount}
            />
          ))}
        </Carousel>
      </Wrapper>
    </Container>
  );
}
