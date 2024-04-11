"use client";

import Link from "next/link";

import { H1 } from "components/Typography";
import { Carousel } from "components/carousel";
import { ProductCard14 } from "@component/product-cards";
import useVisibleSlide from "../hooks/useVisibleSlide";
import Category from "@models/category.model";
// STYLED COMPONENT
import { Wrapper } from "./styles";

// ===============================================
type Props = { categoryList: Category[] };
// ===============================================

export default function Section4({ categoryList }: Props) {
  const { visibleSlides } = useVisibleSlide();

  return (
    <Wrapper className="categories">
      <H1 mb={3}>Top Categories</H1>

      <Carousel infinite={true} visibleSlides={visibleSlides} totalSlides={categoryList.length}>
        {categoryList.map((item) => (
          <Link href="#" key={item.id}>
            <ProductCard14 title={item.name} imgUrl={item.image} available={item.description} />
          </Link>
        ))}
      </Carousel>
    </Wrapper>
  );
}
