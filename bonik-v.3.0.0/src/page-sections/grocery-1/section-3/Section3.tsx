"use client";

import { useEffect, useState } from "react";

import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import { ProductCard10 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useWindowSize from "@hook/useWindowSize";
import Product from "@models/product.model";
// STYLED COMPONENT
import { SubTitle } from "./styles";

// =====================================================
type Props = { title: string; products: Product[] };
// =====================================================

export default function Section3({ title, products }: Props) {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <CategorySectionCreator title={title} seeMoreLink="#">
      <SubTitle>Best collection in 2021 for you!</SubTitle>

      <Box my="-0.25rem">
        <Carousel
          step={3}
          showDots
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={products.length}
          visibleSlides={visibleSlides}>
          {products.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard10
                id={item.id}
                slug={item.slug}
                unit={item.unit}
                title={item.title}
                price={item.price}
                off={item.discount}
                rating={item.rating}
                images={item.images}
                imgUrl={item.thumbnail}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
