"use client";

import { useTheme } from "styled-components";
import Box from "@component/Box";
import { H1 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";
import { HealthCarouselItem } from "@models/carousel.model";
// STYLED COMPONENTS
import { GridItemOne, GridItemTwo, StyledButton, StyledGrid, StyledRoot } from "./styles";

// ==========================================================================
type Props = { id: string; carouselData: HealthCarouselItem[] };
// ==========================================================================

export default function Section1({ id, carouselData }: Props) {
  const theme = useTheme();

  return (
    <StyledRoot id={id}>
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        totalSlides={carouselData.length}
        dotColor={theme.colors.primary.main}>
        {carouselData.map(({ id, imgUrl, title }) => (
          <StyledGrid container key={id}>
            <GridItemOne item md={6} xs={12}>
              <Box py={6}>
                <H1 mb={4}>{title}</H1>
                <StyledButton variant="contained">Shop Now</StyledButton>
              </Box>
            </GridItemOne>

            <GridItemTwo item md={6} xs={12}>
              <LazyImage priority width={570} height={360} src={imgUrl} alt="bonik" />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledRoot>
  );
}
