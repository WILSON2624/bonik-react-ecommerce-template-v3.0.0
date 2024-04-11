"use client";

import { Carousel } from "@component/carousel";
import { ProductCard2 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useVisibleSilde from "../hooks/useVisibleSilde";
import Product from "@models/product.model";

// =============================================
type Props = { products: Product[] };
// =============================================

export default function Section5({ products }: Props) {
  const { visibleSlides } = useVisibleSilde({
    initialSlide: 6,
    xs: 2,
    sm: 3,
    md: 4
  });

  return (
    <CategorySectionCreator title="New Arrivals">
      <Carousel totalSlides={products.length} visibleSlides={visibleSlides}>
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard2
              slug={item.slug}
              price={item.price}
              title={item.title}
              imgUrl={item.thumbnail}
            />
          </div>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
}
