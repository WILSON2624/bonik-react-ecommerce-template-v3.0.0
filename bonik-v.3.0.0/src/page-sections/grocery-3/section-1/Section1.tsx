import Box from "@component/Box";
import { H1 } from "@component/Typography";
import NextImage from "@component/NextImage";
import { Carousel } from "@component/carousel";
import { MainCarouselItem } from "@models/grocery-3.model";
import { theme } from "@utils/theme";
// STYLED COMPONENTS
import { GridItemOne, GridItemTwo, StyledBox, StyledButton, StyledGrid, TextBox } from "./styles";

// ===================================================================
type Props = { carouselData: MainCarouselItem[] };
// ===================================================================

export default function Section1({ carouselData }: Props) {
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        showArrow={false}
        visibleSlides={1}
        dotClass="carousel-dot"
        totalSlides={carouselData.length}
        dotColor={theme.colors.primary.main}>
        {carouselData.map((item, ind) => (
          <Box backgroundColor={theme.colors.paste[50]} key={ind}>
            <StyledGrid container>
              <GridItemOne item md={6} sm={6} xs={12}>
                <div className="img">
                  <NextImage priority width={500} height={500} src={item.imgUrl} alt="bonik" />
                </div>
              </GridItemOne>

              <GridItemTwo item md={6} sm={6} xs={12}>
                <TextBox>
                  <H1>{item.title}</H1>

                  <StyledButton variant="contained" color="primary">
                    Shop Now
                  </StyledButton>
                </TextBox>
              </GridItemTwo>
            </StyledGrid>
          </Box>
        ))}
      </Carousel>
    </StyledBox>
  );
}
