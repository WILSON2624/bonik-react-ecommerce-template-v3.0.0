import axios from "@lib/axios";
// GLOBAL CUSTOM COMPONENTS
import Container from "@component/Container";
// GLOBAL CUSTOM COMPONENTS
import SaleProducts2 from "@sections/sale-page-2/SaleProducts2";

import { SearchParams } from "interfaces";

export default async function SalePage({ searchParams }: SearchParams) {
  const PAGE_SIZE = 28;
  const PAGE = searchParams?.page ? Number(searchParams.page) : 1;
  const params = { page: PAGE, pageSize: PAGE_SIZE };
  const { data } = await axios.get("/api/products", { params });

  return (
    <Container mt="2rem">
      <SaleProducts2 products={data.result} meta={data.meta} />
    </Container>
  );
}
