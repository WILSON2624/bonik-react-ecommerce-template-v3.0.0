import Box from "@component/Box";
import Card from "@component/Card";
import AppStore from "@component/AppStore";
import NextImage from "@component/NextImage";
import { Carousel } from "@component/carousel";
import { H1, H5, H6 } from "@component/Typography";
import { GroceryTwoCarouselItem } from "@models/carousel.model";
// STYLED COMPONENTS
import { ContentWrapper, Wrapper } from "./styles";

// ========================================================================
type Props = { carouselData: GroceryTwoCarouselItem[] };
// ========================================================================

export default function Section1({ carouselData }: Props) {
  return (
    <Wrapper>
      <Carousel
        spacing="0px"
        // autoPlay={true}
        showDots={true}
        dotColor="white"
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        totalSlides={carouselData.length}>
        {carouselData.map((item) => (
          <Card key={item.id} bg="primary.main" color="white" borderRadius={0} position="relative">
            <ContentWrapper>
              <div className="card__inner-box">
                <H1 maxWidth="280px" mb="0.5rem" lineHeight="1.27">
                  {item.title}
                </H1>

                <H6 maxWidth="470px" color="inherit" fontWeight="400" mb="2.5rem">
                  {item.description}
                </H6>

                <H5 fontSize="18px" fontWeight="700" mb="1.25rem">
                  Try our mobile app!
                </H5>

                <AppStore />
              </div>

              <Box className="card__img" minWidth="285px" height="180px" position="relative">
                <NextImage alt="bonik" src={item.imgUrl} width={286} height={181} />
              </Box>
            </ContentWrapper>
          </Card>
        ))}
      </Carousel>
    </Wrapper>
  );
}
