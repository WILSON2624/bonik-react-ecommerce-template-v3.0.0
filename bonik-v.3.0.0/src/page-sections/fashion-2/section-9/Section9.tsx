"use client";

import { useEffect, useState } from "react";

import Image from "@component/Image";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import useWindowSize from "@hook/useWindowSize";
import { theme } from "@utils/theme";
import Brand from "@models/Brand.model";

// ===========================================================
type Section9Props = { brands: Brand[] };
// ===========================================================

export default function Section9({ brands }: Section9Props) {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(5);

  useEffect(() => {
    if (width < 370) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else setVisibleSlides(5);
  }, [width]);

  return (
    <Container mt="4rem">
      <Divider mb="2rem" backgroundColor={theme.colors.gray[400]} />

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

      <Divider mt="2rem" backgroundColor={theme.colors.gray[400]} />
    </Container>
  );
}
