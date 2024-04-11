import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/shops";
// GLOBAL CUSTOM COMPONENTS
import Grid from "@component/grid/Grid";
import ProductFilterCard from "@component/products/ProductFilterCard";
// PAGE SECTION COMPONENTS
import ShopIntroCard from "@sections/shop/ShopIntroCard";
import ProductDetails from "@sections/shop/ProductDetails";
// CUSTOM DATA MODEL
import { SlugParams } from "interfaces";

export default async function ShopDetails({ params }: SlugParams) {
  const shop = await api.getShopBySlug(params.slug);

  return (
    <Fragment>
      <ShopIntroCard />

      <Grid container spacing={6}>
        {/* SHOW IN LARGE DEVICE */}
        {/* <Hidden as={Grid} item md={3} xs={12} down={1024}>
          <ProductFilterCard />
        </Hidden> */}

        <Grid item md={3} xs={12}>
          <ProductFilterCard />
        </Grid>

        <Grid item md={9} xs={12}>
          <ProductDetails shop={shop} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
