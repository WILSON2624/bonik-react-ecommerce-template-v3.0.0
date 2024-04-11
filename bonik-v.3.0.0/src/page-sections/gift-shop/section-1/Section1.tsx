import Box from "@component/Box";
import NextImage from "@component/NextImage";
import { Carousel } from "components/carousel";
import { H1, Paragraph } from "components/Typography";
import { theme } from "@utils/theme";
import { GiftCarouselItem } from "@models/carousel.model";
// STYLED COMPONENTS
import { GridItemOne, GridItemTwo, StyledBox, StyledButton, StyledGrid } from "./styles";

// ==========================================================
type Props = { carouselData: GiftCarouselItem[] };
// ==========================================================

export default function Section1({ carouselData }: Props) {
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        totalSlides={carouselData.length}
        dotColor={theme.colors.marron.main}>
        {carouselData.map((item) => (
          <StyledGrid container key={item.id}>
            <GridItemOne item md={6} xs={12}>
              <Box py={6}>
                <Paragraph color="primary.main" mb={2}>
                  {item.subTitle}
                </Paragraph>

                <H1 mb={4}>{item.title}</H1>

                <StyledButton variant="contained" color="primary">
                  Shop Now
                </StyledButton>
              </Box>
            </GridItemOne>

            <GridItemTwo item md={6} xs={12}>
              <NextImage priority width={600} height={450} src={item.imgUrl} alt="bonik" />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
}
