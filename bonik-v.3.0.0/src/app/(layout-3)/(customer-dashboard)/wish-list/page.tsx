"use client";

import { Fragment } from "react";
// CUSTOM DATA
import db from "@data/db";
// GLOBAL CUSTOM COMPONENTS
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Pagination from "@component/pagination";
import ProductCard1 from "@component/product-cards/ProductCard1";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";

export default function WishList() {
  return (
    <Fragment>
      {/* PAGE TITLE AREA */}
      <DashboardPageHeader
        title="My Wish List"
        iconName="heart_filled"
        button={
          <Button color="primary" bg="primary.light" px="2rem">
            Add All to Cart
          </Button>
        }
      />

      {/* PRODUCT LIST AREA */}
      <Grid container spacing={6}>
        {db.slice(53, 59).map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ProductCard1
              id={item.id}
              slug={item.slug}
              price={item.price}
              title={item.title}
              off={item.discount}
              images={item.images}
              imgUrl={item.thumbnail}
              rating={item.rating || 4}
            />
          </Grid>
        ))}
      </Grid>

      {/* PAGINATION AREA */}
      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination pageCount={5} onChange={(data) => console.log(data)} />
      </FlexBox>
    </Fragment>
  );
}
