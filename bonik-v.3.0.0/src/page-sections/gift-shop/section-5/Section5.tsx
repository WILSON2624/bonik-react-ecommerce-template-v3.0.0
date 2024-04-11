"use client";

import styled from "styled-components";

import { Carousel } from "components/carousel";
import { ProductCard15 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";

import useVisibleSlide from "../hooks/useVisibleSlide";
import Product from "@models/product.model";

// STYLED COMPONENT
const Wrapper = styled("div")(({ theme }) => ({
  "& .carousel__slider": { paddingBottom: 10 },
  "& .carousel__next-button, .carousel__back-button": {
    padding: 10,
    borderRadius: 0,
    boxShadow: theme.shadows[2],
    color: theme.colors.marron.main,
    background: theme.colors.marron[50],
    "&:hover": { background: theme.colors.marron[100] }
  }
}));

// ===============================================
type Props = { products: Product[]; title: string };
// ===============================================

export default function Section5({ products, title }: Props) {
  const { visibleSlides } = useVisibleSlide({
    xs: 1,
    sm: 2,
    md: 3,
    initialSlide: 4
  });

  return (
    <CategorySectionCreator title={title} seeMoreLink="#">
      <Wrapper>
        <Carousel infinite={true} visibleSlides={visibleSlides} totalSlides={products.length}>
          {products.map((item) => (
            <ProductCard15
              id={item.id}
              key={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              images={item.images}
              imgUrl={item.thumbnail}
            />
          ))}
        </Carousel>
      </Wrapper>
    </CategorySectionCreator>
  );
}
