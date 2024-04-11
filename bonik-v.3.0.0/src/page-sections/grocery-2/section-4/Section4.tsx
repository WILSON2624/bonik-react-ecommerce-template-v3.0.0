"use client";

import Box from "@component/Box";
import { H3 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import { ProductCard10 } from "@component/product-cards";
import useVisibleSlide from "../hooks/useVisibleSlide";
import Product from "@models/product.model";

// =======================================================
type Props = { title: string; products: Product[] };
// =======================================================

export default function Section4({ title, products }: Props) {
  const { visibleSlides } = useVisibleSlide();

  return (
    <div>
      <H3 fontSize="25px" mb="2rem">
        {title}
      </H3>

      <Box my="-0.25rem">
        <Carousel
          showDots
          step={3}
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={products.length}
          visibleSlides={visibleSlides}>
          {products.map((item) => (
            <Box py="0.25rem" key={item.id}>
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
    </div>
  );
}
