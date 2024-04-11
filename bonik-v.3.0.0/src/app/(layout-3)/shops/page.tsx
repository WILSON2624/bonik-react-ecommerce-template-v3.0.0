import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import ShopCard1 from "@sections/shop/ShopCard1";
import { H2, SemiSpan } from "@component/Typography";
// API FUNCTIONS
import api from "@utils/__api__/shops";

export default async function ShopList() {
  const shopList = await api.getShopList();

  return (
    <Fragment>
      <H2 mb="24px">All Shops</H2>

      <Grid container spacing={6}>
        {shopList.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ShopCard1
              name={item.name}
              phone={item.phone}
              address={item.address}
              rating={item.rating || 5}
              imgUrl={item.profilePicture}
              coverImgUrl={item.coverPicture}
              shopUrl={`/shops/${item.slug}`}
            />
          </Grid>
        ))}
      </Grid>

      <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center" mt="32px">
        <SemiSpan>Showing 1-9 of {shopList.length} Shops</SemiSpan>
        <Pagination pageCount={Math.ceil(shopList.length / 9)} />
      </FlexBox>
    </Fragment>
  );
}
