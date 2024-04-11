"use client";

import Box from "@component/Box";
import Image from "@component/Image";
import FlexBox from "@component/FlexBox";
import { H2 } from "@component/Typography";
import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import useVisibleSlide from "../hooks/useVisibleSlide";
import Brand from "@models/Brand.model";

// ==========================================================
type Props = { brands: Brand[] };
// ==========================================================

export default function Section9({ brands }: Props) {
  const { visibleSlides } = useVisibleSlide({
    initialSlide: 5,
    md: 4,
    sm: 3,
    xs: 2
  });

  return (
    <Container my="4rem">
      <H2 fontSize={20} mb="1.5rem">
        Featured Brands
      </H2>

      <Box padding="2rem" bg="white">
        <Carousel
          autoPlay
          showArrow={false}
          totalSlides={brands.length}
          visibleSlides={visibleSlides}>
          {brands.map((item) => (
            <FlexBox
              key={item.id}
              height="100%"
              margin="auto"
              maxWidth={110}
              alignItems="center"
              justifyContent="center">
              <Image src={item.image} alt="brand" width="100%" style={{ filter: "grayscale(1)" }} />
            </FlexBox>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
