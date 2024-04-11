"use client";

import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import Address from "@models/address.model";

// ==============================================================
interface Props {
  addressList: Address[];
}
// ==============================================================

export default function AddressPagination({ addressList }: Props) {
  return (
    <FlexBox justifyContent="center" mt="2.5rem">
      <Pagination
        onChange={(data) => console.log(data)}
        pageCount={Math.ceil(addressList.length / 5)}
      />
    </FlexBox>
  );
}
