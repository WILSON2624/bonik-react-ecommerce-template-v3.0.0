"use client";

import styled from "styled-components";

import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H2 } from "@component/Typography";
import { ProductCard1 } from "@component/product-cards";
import Product from "@models/product.model";

// STYLED COMPONENT
const GridOne = styled(Grid)({
  ".image-holder > a > span": { height: "100% !important" }
});

// ==========================================================
type Props = { products: Product[] };
// ==========================================================

export default function Section7({ products }: Props) {
  const trending = products.slice(1, products.length);

  return (
    <Box mb="3.75rem">
      <H2 mb="1.5rem">Trending Items</H2>

      <Grid container spacing={6}>
        <GridOne item md={4} xs={12}>
          <ProductCard1
            id={products[0].title}
            slug={products[0].slug}
            title={products[0].title}
            price={products[0].price}
            off={products[0].discount}
            rating={products[0].rating}
            images={products[0].images}
            imgUrl={products[0].thumbnail}
          />
        </GridOne>

        <Grid item md={8} xs={12}>
          <Grid container spacing={6}>
            {trending.map((item, ind) => (
              <Grid item lg={4} sm={6} xs={12} key={item.id}>
                <ProductCard1
                  id={item.id}
                  off={ind * 10}
                  slug={item.slug}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  images={item.images}
                  imgUrl={item.thumbnail}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
