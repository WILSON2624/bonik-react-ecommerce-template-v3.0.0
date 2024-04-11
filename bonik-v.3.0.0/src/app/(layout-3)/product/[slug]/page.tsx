import { Fragment } from "react";

import api from "@utils/__api__/products";
import ProductIntro from "@component/products/ProductIntro";
import ProductView from "@component/products/ProductView";

// ==============================================================
interface Props {
  params: { slug: string };
}
// ==============================================================

export default async function ProductDetails({ params }: Props) {
  const shops = await api.getAvailableShop();
  const relatedProducts = await api.getRelatedProducts();
  const frequentlyBought = await api.getFrequentlyBought();
  const product = await api.getProduct(params.slug as string);

  return (
    <Fragment>
      <ProductIntro
        id={product.id}
        price={product.price}
        title={product.title}
        images={product.images}
      />

      <ProductView
        shops={shops}
        relatedProducts={relatedProducts}
        frequentlyBought={frequentlyBought}
      />
    </Fragment>
  );
}
