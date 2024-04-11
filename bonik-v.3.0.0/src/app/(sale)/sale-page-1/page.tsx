import axios from "@lib/axios";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "@component/FlexBox";
import { H1 } from "@component/Typography";
import Container from "@component/Container";
// PAGE SECTION COMPONENTS
import SaleNavbar from "@sections/sale-page-1/SaleNavbar";
import SaleCategory from "@sections/sale-page-1/SaleCategory";
import SaleProducts from "@sections/sale-page-1/SaleProducts";

import { SearchParams } from "interfaces";

export default async function SalePage({ searchParams }: SearchParams) {
  const PAGE_SIZE = 28;
  const PAGE = searchParams?.page ? Number(searchParams.page) : 1;

  const { data } = await axios.get("/api/products", {
    params: { page: PAGE, pageSize: PAGE_SIZE }
  });

  const saleCategoryList = [
    { icon: "women-dress", title: "Women" },
    { icon: "beauty-products", title: "Cosmetics" },
    { icon: "camera", title: "Electronics" },
    { icon: "sofa", title: "Furniture" }
  ];

  return (
    <Container mt="2rem">
      <SaleNavbar saleCategoryList={saleCategoryList} />

      <div>
        <FlexBox mb="2rem" flexWrap="wrap">
          <H1 color="primary.main" mr="0.5rem" lineHeight="1">
            Flash Deals,
          </H1>

          <H1 color="text.muted" lineHeight="1">
            Enjoy Upto 80% discounts
          </H1>
        </FlexBox>

        <SaleCategory saleCategoryList={saleCategoryList} />
      </div>

      <SaleProducts products={data.result} meta={data.meta} />
    </Container>
  );
}
