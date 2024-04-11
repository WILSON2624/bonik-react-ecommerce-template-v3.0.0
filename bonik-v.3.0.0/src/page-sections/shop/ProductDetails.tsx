"use client";

import { Fragment } from "react";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Sidenav from "@component/sidenav/Sidenav";
import ProductGridView from "@component/products/ProductCard1List";
import ProductFilterCard from "@component/products/ProductFilterCard";
import useWindowSize from "@hook/useWindowSize";
import Shop from "@models/shop.model";
import Product from "@models/product.model";

// ==============================================================
type Props = { shop: Shop };
// ==============================================================

export default function ProductDetails({ shop }: Props) {
  const width = useWindowSize();
  const isTablet = width < 1025;

  return (
    <Fragment>
      {/* SHOW IN SMALL DEVICE */}
      {isTablet && (
        <Sidenav
          scroll={true}
          position="left"
          handle={
            <FlexBox justifyContent="flex-end" mb="12px">
              <Icon>options</Icon>
            </FlexBox>
          }>
          <ProductFilterCard />
        </Sidenav>
      )}

      <ProductGridView products={shop.products?.slice(0, 9) as Product[]} />
    </Fragment>
  );
}
