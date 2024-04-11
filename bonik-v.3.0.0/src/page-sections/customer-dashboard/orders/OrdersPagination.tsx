"use client";

import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import Order from "@models/order.model";

export default function OrdersPagination({ orderList }: { orderList: Order[] }) {
  return (
    <FlexBox justifyContent="center" mt="2.5rem">
      <Pagination
        onChange={(data) => console.log(data)}
        pageCount={Math.ceil(orderList.length / 10)}
      />
    </FlexBox>
  );
}
