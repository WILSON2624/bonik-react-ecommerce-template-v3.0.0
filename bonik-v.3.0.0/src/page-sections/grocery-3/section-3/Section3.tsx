"use client";

import { useEffect, useState } from "react";

import Box from "@component/Box";
import { H1 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import { ProductCard12 } from "@component/product-cards";
import useWindowSize from "@hook/useWindowSize";
import Product from "@models/product.model";
// STYLED COMPONENT
import { TitleBox } from "./styles";

// =====================================================
type Props = { products: Product[] };
// =====================================================

export default function Section3({ products }: Props) {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <div>
      <TitleBox>
        <H1>Top Saled Products</H1>
        <div />
      </TitleBox>

      <Box my="-0.25rem">
        <Carousel
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={products.length}
          visibleSlides={visibleSlides}>
          {products.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <ProductCard12
                id={item.id}
                slug={item.slug}
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
    </div>
  );
}
