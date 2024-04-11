"use client";

import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { H1 } from "@component/Typography";
import { Button } from "@component/buttons";
import { ProductCard12 } from "@component/product-cards";
import Product from "@models/product.model";
// STYLED COMPONENT
import { TitleBox } from "./styles";

// =====================================================
type Props = { products: Product[] };
// =====================================================

export default function Section4({ products }: Props) {
  return (
    <Box mb={6}>
      <TitleBox>
        <H1>Our All Products</H1>
        <div />
      </TitleBox>

      <Grid container spacing={6}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={12}>
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
          </Grid>
        ))}
      </Grid>

      <FlexBox alignItems="center" justifyContent="center" mt={36}>
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </FlexBox>
    </Box>
  );
}
