"use client";

import Link from "next/link";
import { Fragment } from "react";
import { format } from "date-fns";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Card from "@component/Card";
import Select from "@component/Select";
import Avatar from "@component/avatar";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Divider from "@component/Divider";
import TableRow from "@component/TableRow";
import TextArea from "@component/textarea";
import TextField from "@component/text-field";
import { Button, IconButton } from "@component/buttons";
import Typography, { H5, H6 } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// CUSTOM DATA MODEL
import { IDParams } from "interfaces";

export default function OrderDetails({ params }: IDParams) {
  return (
    <Fragment>
      <DashboardPageHeader
        title="Order Details"
        iconName="bag_filled"
        button={
          <Link href="/vendor/orders">
            <Button color="primary" bg="primary.light" px="2rem">
              Back to Order List
            </Button>
          </Link>
        }
      />

      <Card p="0px" mb="30px" overflow="hidden">
        <TableRow bg="gray.200" p="12px" boxShadow="none" borderRadius={0}>
          <FlexBox className="pre" flex="0 0 0 !important" m="6px" alignItems="center">
            <Typography fontSize="14px" color="text.muted" mr="4px">
              Order ID:
            </Typography>

            <Typography fontSize="14px">{params.id}</Typography>
          </FlexBox>

          <FlexBox className="pre" m="6px" alignItems="center">
            <Typography fontSize="14px" color="text.muted" mr="4px">
              Placed on:
            </Typography>
            <Typography fontSize="14px">{format(new Date(), "dd MMM, yyyy")}</Typography>
          </FlexBox>

          <Box maxWidth="160px">
            <Select placeholder="Order Status" options={orderStatusList} />
          </Box>
        </TableRow>

        <Box p="1rem 1.5rem 10px">
          <TextField label="Add Product" fullwidth />
        </Box>

        <Box py="0.5rem">
          {[1, 2, 3, 4].map((item) => (
            <FlexBox px="1rem" py="0.5rem" flexWrap="wrap" alignItems="center" key={item}>
              <FlexBox flex="2 2 260px" m="6px" alignItems="center">
                <Avatar src="/assets/images/products/imagetree.png" size={64} />

                <Box ml="20px">
                  <H6 my="0px">Nike React Phantom Run Flyknit 2</H6>
                  <FlexBox alignItems="center">
                    <Typography fontSize="14px" color="text.muted">
                      $145 x
                    </Typography>

                    <Box maxWidth="60px" ml="8px" mt="0.25rem">
                      <TextField defaultValue={3} type="number" fullwidth />
                    </Box>
                  </FlexBox>
                </Box>
              </FlexBox>

              <FlexBox flex="1 1 260px" m="6px" alignItems="center">
                <Typography fontSize="14px" color="text.muted">
                  Product properties: Black, L
                </Typography>
              </FlexBox>

              <FlexBox flex="0 0 0 !important" m="6px" alignItems="center">
                <IconButton>
                  <Icon variant="small">delete</Icon>
                </IconButton>
              </FlexBox>
            </FlexBox>
          ))}
        </Box>
      </Card>

      <Grid container spacing={6}>
        <Grid item lg={6} md={6} xs={12}>
          <Card p="20px 30px" mb="1.5rem">
            <H5 mt="0px" mb="14px">
              Shipping Address
            </H5>

            <TextArea
              rows={5}
              fullwidth
              borderRadius={10}
              defaultValue="Kelly Williams 777 Brockton Avenue, Abington MA 2351"
            />
          </Card>

          <Card p="20px 30px">
            <H5 mt="0px" mb="14px">
              Customer's Note
            </H5>
            <TextArea defaultValue="Please deliver ASAP." rows={5} borderRadius={10} fullwidth />
          </Card>
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <Card p="20px 30px" mb="1.5rem">
            <H5 mt="0px" mb="14px">
              Total Summary
            </H5>

            <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
              <Typography fontSize="14px" color="text.hint">
                Subtotal:
              </Typography>
              <H6 my="0px">$335</H6>
            </FlexBox>

            <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
              <Typography fontSize="14px" color="text.hint">
                Shipping fee:
              </Typography>

              <FlexBox alignItems="center" maxWidth="100px" ml="8px" mt="0.25rem">
                <Typography mr="0.5rem">$</Typography>
                <TextField defaultValue={10} type="number" fullwidth />
              </FlexBox>
            </FlexBox>

            <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
              <Typography fontSize="14px" color="text.hint">
                Discount:
              </Typography>

              <FlexBox alignItems="center" maxWidth="100px" ml="8px" mt="0.25rem">
                <Typography mr="0.5rem">-$</Typography>
                <TextField defaultValue={30} type="number" fullwidth />
              </FlexBox>
            </FlexBox>

            <Divider mb="0.5rem" />

            <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
              <H6 my="0px">Total</H6>
              <H6 my="0px">$315</H6>
            </FlexBox>

            <Typography fontSize="14px">Paid by Credit/Debit Card</Typography>
          </Card>

          <Button variant="contained" color="primary" ml="auto">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

const orderStatusList = [
  { label: "Processing", value: "Processing" },
  { label: "Pending", value: "Pending" },
  { label: "Delivered", value: "Delivered" },
  { label: "Cancelled", value: "Cancelled" }
];
