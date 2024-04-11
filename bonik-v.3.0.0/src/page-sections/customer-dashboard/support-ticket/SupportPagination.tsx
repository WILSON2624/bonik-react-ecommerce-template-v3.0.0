"use client";

import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import Ticket from "@models/Ticket.model";

export default function SupportPagination({ ticketList }: { ticketList: Ticket[] }) {
  return (
    <FlexBox justifyContent="center" mt="2.5rem">
      <Pagination
        onChange={(data) => console.log(data)}
        pageCount={Math.ceil(ticketList.length / 10)}
      />
    </FlexBox>
  );
}
