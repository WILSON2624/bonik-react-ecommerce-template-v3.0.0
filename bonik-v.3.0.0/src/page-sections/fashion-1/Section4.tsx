"use client";

import { useEffect, useState } from "react";
import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import { ProductCard2 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useWindowSize from "@hook/useWindowSize";
import Product from "@models/product.model";

// ==========================================================
type Props = { products: Product[] };
// ==========================================================

export default function Section4({ products }: Props) {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    if (width < 500) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(3);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);

  return (
    <CategorySectionCreator iconName="new-product-1" title="New Arrivals" seeMoreLink="#">
      <Box mt="-0.25rem" mb="-0.25rem">
        <Carousel totalSlides={products.length} visibleSlides={visibleSlides}>
          {products.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <ProductCard2
                slug={item.slug}
                price={item.price}
                title={item.title}
                imgUrl={item.thumbnail}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
