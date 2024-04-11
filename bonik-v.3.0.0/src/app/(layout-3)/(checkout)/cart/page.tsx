"use client";
import Link from "next/link";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import { Card1 } from "@component/Card1";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import Typography from "@component/Typography";
import { ProductCard7 } from "@component/product-cards";
// CUSTOM HOOK
import { useAppContext } from "@context/app-context";
// CUSTOM DATA
import countryList from "@data/countryList";
// UTILS
import { currency } from "@utils/utils";

export default function Cart() {
  const { state } = useAppContext();

  const getTotalPrice = () => {
    return state.cart.reduce((accumulator, item) => accumulator + item.price * item.qty, 0) || 0;
  };

  return (
    <Fragment>
      <Grid container spacing={6}>
        <Grid item lg={8} md={8} xs={12}>
          {state.cart.map((item) => (
            <ProductCard7
              mb="1.5rem"
              id={item.id}
              key={item.id}
              qty={item.qty}
              slug={item.slug}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          ))}
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <Card1>
            <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
              <Typography color="gray.600">Total:</Typography>

              <Typography fontSize="18px" fontWeight="600" lineHeight="1">
                {currency(getTotalPrice())}
              </Typography>
            </FlexBox>

            <Divider mb="1rem" />

            <FlexBox alignItems="center" mb="1rem">
              <Typography fontWeight="600" mr="10px">
                Additional Comments
              </Typography>

              <Box p="3px 10px" bg="primary.light" borderRadius="3px">
                <Typography fontSize="12px" color="primary.main">
                  Note
                </Typography>
              </Box>
            </FlexBox>

            <TextArea rows={6} fullwidth mb="1rem" />

            <Divider mb="1rem" />

            <TextField placeholder="Voucher" fullwidth />

            <Button variant="outlined" color="primary" mt="1rem" mb="30px" fullwidth>
              Apply Voucher
            </Button>

            <Divider mb="1.5rem" />

            <Typography fontWeight="600" mb="1rem">
              Shipping Estimates
            </Typography>

            <Select
              mb="1rem"
              label="Country"
              options={countryList}
              placeholder="Select Country"
              onChange={(e) => console.log(e)}
            />

            <Select
              label="State"
              options={stateList}
              placeholder="Select State"
              onChange={(e) => console.log(e)}
            />

            <Box mt="1rem">
              <TextField label="Zip Code" placeholder="3100" fullwidth />
            </Box>

            <Button variant="outlined" color="primary" my="1rem" fullwidth>
              Calculate Shipping
            </Button>

            <Link href="/checkout">
              <Button variant="contained" color="primary" fullwidth>
                Checkout Now
              </Button>
            </Link>
          </Card1>
        </Grid>
      </Grid>
    </Fragment>
  );
}

const stateList = [
  { value: "New York", label: "New York" },
  { value: "Chicago", label: "Chicago" }
];
