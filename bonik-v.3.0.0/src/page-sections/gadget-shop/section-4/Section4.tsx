"use client";

import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import { ProductCard1 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useVisibleSilde from "../hooks/useVisibleSilde";
import Product from "@models/product.model";

// =============================================
type Props = { products: Product[] };
// =============================================

export default function Section4({ products }: Props) {
  const { visibleSlides } = useVisibleSilde();

  return (
    <CategorySectionCreator title="Most Viewed">
      <Box my="-0.25rem">
        <Carousel totalSlides={10} visibleSlides={visibleSlides} arrowButtonColor="inherit">
          {products.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <ProductCard1
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
    </CategorySectionCreator>
  );
}
