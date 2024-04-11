"use client";

import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H2 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import { ProductCard11 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { Card1, Card4 } from "../showcase-cards";
import useVisibleSilde from "../hooks/useVisibleSilde";
import Product from "@models/product.model";

const ARROW_BUTTON_STYLE = {
  boxShadow: "none",
  background: "transparent"
};

// =================================================================
type Props = { topPickList: Product[]; mainCarousel: Product[] };
// =================================================================

export default function Section1({ topPickList, mainCarousel }: Props) {
  const { visibleSlides } = useVisibleSilde();
  const TOTAL_SLIDES = topPickList.length;

  return (
    <CategorySectionCreator>
      <Grid container spacing={6}>
        {/* INTRODUCE NEW WINTER CAROUSEL AREA */}
        <Grid item md={5} xs={12}>
          <Carousel
            totalSlides={3}
            visibleSlides={1}
            arrowButtonColor="inherit"
            leftButtonStyle={{ ...ARROW_BUTTON_STYLE, left: 8 }}
            rightButtonStyle={{ ...ARROW_BUTTON_STYLE, right: 8 }}>
            {mainCarousel.map((item) => (
              <Card1
                key={item.id}
                title={item.title}
                price={item.price}
                imgUrl={item.thumbnail}
                discount={item.discount}
              />
            ))}
          </Carousel>
        </Grid>

        <Grid item md={7} xs={12}>
          {/* TOP PICKS PRODUCTS CAROUSEL AREA */}
          <Box mb="3rem">
            <H2 mb="1.5rem">Top Picks</H2>

            <Carousel
              arrowButtonColor="inherit"
              totalSlides={TOTAL_SLIDES}
              visibleSlides={visibleSlides}>
              {topPickList.map((item) => (
                <ProductCard11
                  key={item.id}
                  slug={item.slug}
                  price={item.price}
                  title={item.title}
                  off={item.discount}
                  rating={item.rating}
                  imgUrl={item.thumbnail}
                />
              ))}
            </Carousel>
          </Box>

          {/* CONVERSE COLLECTION BANNER AREA */}
          <Card4 />

          {/* CAROUSEL PRODUCTS AREA */}
          <Carousel
            arrowButtonColor="inherit"
            totalSlides={TOTAL_SLIDES}
            visibleSlides={visibleSlides}>
            {topPickList.map((item) => (
              <ProductCard11
                key={item.id}
                slug={item.slug}
                price={item.price}
                title={item.title}
                off={item.discount}
                rating={item.rating}
                imgUrl={item.thumbnail}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
}
