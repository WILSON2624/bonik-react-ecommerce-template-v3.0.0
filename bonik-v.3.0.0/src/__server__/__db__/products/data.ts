import dbProducts from "@data/db";
import { products as gift } from "../gift/data";
import { products as gadget } from "../gadget/data";
import { products as market1 } from "../market-1/data";
import { products as market2 } from "../market-2/data";
import { products as fashion1 } from "../fashion-1/data";
import { products as fashion2 } from "../fashion-2/data";
import { products as fashion3 } from "../fashion-3/data";
import { products as grocery1 } from "../grocery-1/data";
import { products as grocery2 } from "../grocery-2/data";
import { products as grocery3 } from "../grocery-3/data";
import { products as furniture } from "../furniture/data";
import { products as healthBeauty } from "../health-beauty/data";
import {
  relatedProducts,
  frequentlyBoughtData,
} from "../related-products/data";

// all used products in the bazaar template
const productList = [
  ...fashion1,
  ...fashion2,
  ...fashion3,
  ...furniture,
  ...gadget,
  ...gift,
  ...grocery1,
  ...grocery2,
  ...grocery3,
  ...healthBeauty,
  ...market1,
  ...market2,
  ...relatedProducts,
  ...frequentlyBoughtData,
  ...dbProducts,
];

// get unique products from prouct list
const uniqueProductMap = new Map();
productList.forEach((product) => {
  if (!uniqueProductMap.has(product.slug)) {
    uniqueProductMap.set(product.slug, product);
  }
});
const uniqueProudcts = Array.from(uniqueProductMap.values());

// get unique products from prouct list
// const uniqueProudcts = [...new Set(productList.map((item) => item.slug))].map(
//   (item) => productList.find((it) => it.slug === item)
// );

// get the all slugs
const slugs = uniqueProudcts.map((item) => ({ params: { slug: item.slug } }));

export { uniqueProudcts, slugs };
