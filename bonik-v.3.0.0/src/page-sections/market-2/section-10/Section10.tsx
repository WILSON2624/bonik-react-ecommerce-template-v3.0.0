"use client";

import { useState } from "react";

import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import { H2, Paragraph } from "@component/Typography";
import { ProductCard19 } from "@component/product-cards";
import { Carousel, CarouselWrapper } from "@component/carousel";
import useVisibleSlide from "../hooks/useVisibleSlide";
import Product from "@models/product.model";
// STYLED COMPONENT
import { ButtonsWrapper } from "./styles";

// ======================================================================
type Section10Props = { products: Product[] };
// ======================================================================

export default function Section10({ products }: Section10Props) {
  const { visibleSlides } = useVisibleSlide();
  const [selected, setSelected] = useState("new");

  const handleSelected = (item: string) => () => setSelected(item);
  const activeColor = (item: string) => (item === selected ? "error" : "dark");

  const buttons = [
    { id: 1, title: "New Arrivals", type: "new" },
    { id: 2, title: "Best Seller", type: "best" },
    { id: 3, title: "Most Popular", type: "popular" },
    { id: 4, title: "View All", type: "view" }
  ];

  return (
    <Container mb="4rem">
      <FlexBox alignItems="center" justifyContent="space-between" flexWrap="wrap" mb="1.5rem">
        <div>
          <H2 fontSize={20}>Selected Products</H2>
          <Paragraph>All our new arrivals in a exclusive brand selection</Paragraph>
        </div>

        <ButtonsWrapper>
          {buttons.map(({ id, title, type }) => (
            <Button
              key={id}
              variant="outlined"
              color={activeColor(type)}
              onClick={handleSelected(type)}>
              {title}
            </Button>
          ))}
        </ButtonsWrapper>
      </FlexBox>

      <CarouselWrapper color="dark">
        <Carousel totalSlides={products.length} visibleSlides={visibleSlides}>
          {products.map((product) => (
            <ProductCard19
              id={product.id}
              key={product.id}
              slug={product.slug}
              name={product.title}
              price={product.price}
              img={product.thumbnail}
              images={product.images as string[]}
              reviews={product.reviews?.length || 15}
            />
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}
