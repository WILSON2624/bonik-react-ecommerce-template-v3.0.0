import { Carousel } from "components/carousel";
import { H1, H6, Paragraph } from "components/Typography";
import { FurnitureCarouselItem } from "@models/carousel.model";
import { theme } from "@utils/theme";
// STYLED COMPONENTS
import { Container, GridItemOne, StyledRoot, StyledButton, StyledGrid, TextBox } from "./styles";

// ===============================================================
type Props = { mainCarouselData: FurnitureCarouselItem[] };
// ===============================================================

export default function Section1({ mainCarouselData }: Props) {
  return (
    <StyledRoot id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={theme.colors.paste.main}
        totalSlides={mainCarouselData.length}>
        {mainCarouselData.map((item) => (
          <Container key={item.id}>
            <StyledGrid container>
              <GridItemOne item lg={6} md={8} xs={12}>
                <H6>{item.subTitle}</H6>
                <H1 fontSize={60}>{item.title}</H1>

                <TextBox>
                  <Paragraph color="grey.600">{item.description}</Paragraph>
                </TextBox>

                <StyledButton color="primary" variant="contained">
                  {item.buttonText}
                </StyledButton>
              </GridItemOne>
            </StyledGrid>
          </Container>
        ))}
      </Carousel>
    </StyledRoot>
  );
}
