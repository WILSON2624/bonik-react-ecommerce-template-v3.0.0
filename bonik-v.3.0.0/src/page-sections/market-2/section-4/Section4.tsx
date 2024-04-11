"use client";

import FlexBox from "@component/FlexBox";
import NavLink from "@component/nav-link";
import { H2 } from "@component/Typography";
import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import { ProductCard19 } from "@component/product-cards";
import { CarouselWrapper } from "@component/carousel/styles";
import useVisibleSlide from "../hooks/useVisibleSlide";
import Product from "@models/product.model";

// ======================================================================
type Section4Props = { products: Product[] };
// ======================================================================

export default function Section4({ products }: Section4Props) {
  const { visibleSlides } = useVisibleSlide();

  return (
    <Container pt="4rem">
      <FlexBox alignItems="center" justifyContent="space-between" mb="1.5rem">
        <H2 fontSize={20}>Deals Of The Day</H2>
        <NavLink href="#">More Products</NavLink>
      </FlexBox>

      <CarouselWrapper color="dark">
        <Carousel totalSlides={products.length} visibleSlides={visibleSlides}>
          {products.map((product) => (
            <ProductCard19
              key={product.id}
              id={product.id}
              slug={product.slug}
              name={product.title}
              price={product.price}
              img={product.thumbnail}
              images={product.images as string[]}
              reviews={product.reviews?.length || 11}
            />
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}
