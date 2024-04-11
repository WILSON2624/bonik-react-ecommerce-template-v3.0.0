"use client";

import { useEffect, useState } from "react";

import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import useWindowSize from "@hook/useWindowSize";
import { ProductCard16 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
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

      <div>
        <Carousel
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={products.length}
          visibleSlides={visibleSlides}>
          {products.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <ProductCard16
                id={item.id}
                slug={item.slug}
                title={item.title}
                price={item.price}
                off={item.discount}
                rating={item.rating}
                imgUrl={item.thumbnail}
                images={item.images as string[]}
              />
            </Box>
          ))}
        </Carousel>
      </div>
    </CategorySectionCreator>
  );
}
