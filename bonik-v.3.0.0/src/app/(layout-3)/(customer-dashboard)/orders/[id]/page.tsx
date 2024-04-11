import { Fragment } from "react";
import { format } from "date-fns";
// UTILS
import { currency } from "@utils/utils";
// API FUNCTIONS
import api from "@utils/__api__/orders";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import Typography, { H5, H6, Paragraph } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { OrderStatus, WriteReview, OrderListButton } from "@sections/customer-dashboard/orders";
// CUSTOM DATA MODEL
import { IDParams } from "interfaces";

export default async function OrderDetails({ params }: IDParams) {
  const order = await api.getOrder(String(params.id));

  return (
    <Fragment>
      <DashboardPageHeader
        title="Order Details"
        iconName="bag_filled"
        button={<OrderListButton />}
      />

      <OrderStatus />

      <Card p="0px" mb="30px" overflow="hidden" borderRadius={8}>
        <TableRow bg="gray.200" p="12px" boxShadow="none" borderRadius={0}>
          <FlexBox className="pre" m="6px" alignItems="center">
            <Typography fontSize="14px" color="text.muted" mr="4px">
              Order ID:
            </Typography>

            <Typography fontSize="14px">#{order.id.substring(0, 8)}</Typography>
          </FlexBox>

          <FlexBox className="pre" m="6px" alignItems="center">
            <Typography fontSize="14px" color="text.muted" mr="4px">
              Placed on:
            </Typography>

            <Typography fontSize="14px">
              {format(new Date(order.createdAt), "dd MMM, yyyy")}
            </Typography>
          </FlexBox>

          {order.isDelivered && (
            <FlexBox className="pre" m="6px" alignItems="center">
              <Typography fontSize="14px" color="text.muted" mr="4px">
                Delivered on:
              </Typography>

              <Typography fontSize="14px">
                {format(new Date(order.deliveredAt), "dd MMM, yyyy")}
              </Typography>
            </FlexBox>
          )}
        </TableRow>

        <Box py="0.5rem">
          {order.items.map((item, ind) => (
            <WriteReview item={item} />
          ))}
        </Box>
      </Card>

      <Grid container spacing={6}>
        <Grid item lg={6} md={6} xs={12}>
          <Card p="20px 30px" borderRadius={8}>
            <H5 mt="0px" mb="14px">
              Shipping Address
            </H5>

            <Paragraph fontSize="14px" my="0px">
              {order.shippingAddress}
            </Paragraph>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <Card p="20px 30px" borderRadius={8}>
            <H5 mt="0px" mb="14px">
              Total Summary
            </H5>

            <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
              <Typography fontSize="14px" color="text.hint">
                Subtotal:
              </Typography>

              <H6 my="0px">{currency(order.totalPrice)}</H6>
            </FlexBox>

            <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
              <Typography fontSize="14px" color="text.hint">
                Shipping fee:
              </Typography>

              <H6 my="0px">$10</H6>
            </FlexBox>

            <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
              <Typography fontSize="14px" color="text.hint">
                Discount:
              </Typography>

              <H6 my="0px">-${order.discount}</H6>
            </FlexBox>

            <Divider mb="0.5rem" />

            <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
              <H6 my="0px">Total</H6>
              <H6 my="0px">{currency(order.totalPrice)}</H6>
            </FlexBox>

            <Typography fontSize="14px">Paid by Credit/Debit Card</Typography>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
