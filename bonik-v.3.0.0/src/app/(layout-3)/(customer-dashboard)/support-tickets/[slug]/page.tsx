import { Fragment } from "react";
import { format } from "date-fns";
// API FUNCTIONS
import api from "@utils/__api__/ticket";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Avatar from "@component/avatar";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import { H5, SemiSpan } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { BackToSupport, MessageSubmit } from "@sections/customer-dashboard/support-ticket";
// CUSTOM DATA MODEL
import { SlugParams } from "interfaces";

export default async function TicketDetails({ params }: SlugParams) {
  const ticket = await api.getTicket(String(params.slug));

  return (
    <Fragment>
      <DashboardPageHeader iconName="support" title="Support Ticket" button={<BackToSupport />} />

      {ticket.conversation.map((item: any, ind: number) => (
        <FlexBox mb="30px" key={ind}>
          <Avatar src={item.imgUrl} mr="1rem" />

          <div>
            <H5 fontWeight="600" mt="0px" mb="0px">
              {item.name}
            </H5>
            <SemiSpan>{format(new Date(item.date), "hh:mm:a | dd MMM yyyy")}</SemiSpan>
            <Box borderRadius="10px" bg="gray.200" p="1rem" mt="1rem">
              {item.text}
            </Box>
          </div>
        </FlexBox>
      ))}

      <Divider mb="2rem" bg="gray.300" />

      <MessageSubmit />
    </Fragment>
  );
}
