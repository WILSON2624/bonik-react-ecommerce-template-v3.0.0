import Link from "next/link";
import { Fragment } from "react";
import axios from "@lib/axios";
// GLOBAL CUSTOM COMPONENTS
import { Button } from "@component/buttons";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { ProductForm } from "@sections/vendor-dashboard/products";
// CUSTOM DATA MODEL
import { SlugParams } from "interfaces";

const categoryOptions = [
  { label: "Fashion", value: "fashion" },
  { label: "Gadget", value: "gadget" }
];

export default async function ProductDetails({ params }: SlugParams) {
  const { data } = await axios.get("/api/products/slug", {
    params: { slug: params.slug as string }
  });

  return (
    <Fragment>
      <DashboardPageHeader
        title="Edit Product"
        iconName="delivery-box"
        button={
          <Link href="/vendor/products">
            <Button color="primary" bg="primary.light" px="2rem">
              Back to Product List
            </Button>
          </Link>
        }
      />

      <ProductForm product={data} categoryOptions={categoryOptions} />
    </Fragment>
  );
}
