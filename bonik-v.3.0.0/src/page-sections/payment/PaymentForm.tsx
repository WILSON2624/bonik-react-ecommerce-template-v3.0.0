"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, Fragment, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import Box from "@component/Box";
import Radio from "@component/radio";
import Grid from "@component/grid/Grid";
import { Card1 } from "@component/Card1";
import FlexBox from "@component/FlexBox";
import Divider from "@component/Divider";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import Typography from "@component/Typography";
import useWindowSize from "@hook/useWindowSize";

export default function PaymentForm() {
  const router = useRouter();
  const width = useWindowSize();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const isMobile = width < 769;

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    router.push("/payment");
  };

  const handlePaymentMethodChange = ({ target: { name } }: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(name);
  };

  return (
    <Fragment>
      <Card1 mb="2rem">
        <Radio
          mb="1.5rem"
          color="secondary"
          name="credit-card"
          onChange={handlePaymentMethodChange}
          checked={paymentMethod === "credit-card"}
          label={
            <Typography ml="6px" fontWeight="600" fontSize="18px">
              Pay with credit card
            </Typography>
          }
        />

        <Divider mb="1.25rem" mx="-2rem" />

        {paymentMethod === "credit-card" && (
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box mb="1.5rem">
                  <Grid container horizontal_spacing={6} vertical_spacing={4}>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullwidth
                        name="card_no"
                        label="Card Number"
                        onBlur={handleBlur}
                        value={values.card_no}
                        onChange={handleChange}
                        errorText={touched.card_no && errors.card_no}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullwidth
                        name="exp_date"
                        label="Exp Date"
                        placeholder="MM/YY"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.exp_date}
                        errorText={touched.exp_date && errors.exp_date}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullwidth
                        name="name"
                        onBlur={handleBlur}
                        value={values.name}
                        label="Name on Card"
                        onChange={handleChange}
                        errorText={touched.name && errors.name}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullwidth
                        name="name"
                        onBlur={handleBlur}
                        value={values.name}
                        label="Name on Card"
                        onChange={handleChange}
                        errorText={touched.name && errors.name}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Button variant="outlined" color="primary" mb="30px">
                  Submit
                </Button>

                <Divider mb="1.5rem" mx="-2rem" />
              </form>
            )}
          </Formik>
        )}

        <Radio
          mb="1.5rem"
          name="paypal"
          color="secondary"
          onChange={handlePaymentMethodChange}
          checked={paymentMethod === "paypal"}
          label={
            <Typography ml="6px" fontWeight="600" fontSize="18px">
              Pay with Paypal
            </Typography>
          }
        />
        <Divider mb="1.5rem" mx="-2rem" />

        {paymentMethod === "paypal" && (
          <Fragment>
            <FlexBox alignItems="flex-end" mb="30px">
              <TextField
                fullwidth
                name="email"
                type="email"
                label="Paypal Email"
                mr={isMobile ? "1rem" : "30px"}
              />
              <Button variant="outlined" color="primary" type="button">
                Submit
              </Button>
            </FlexBox>

            <Divider mb="1.5rem" mx="-2rem" />
          </Fragment>
        )}

        <Radio
          name="cod"
          color="secondary"
          checked={paymentMethod === "cod"}
          onChange={handlePaymentMethodChange}
          label={
            <Typography ml="6px" fontWeight="600" fontSize="18px">
              Cash On Delivery
            </Typography>
          }
        />
      </Card1>

      <Grid container spacing={7}>
        <Grid item sm={6} xs={12}>
          <Link href="/checkout">
            <Button variant="outlined" color="primary" type="button" fullwidth>
              Back to checkout details
            </Button>
          </Link>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Link href="/orders">
            <Button variant="contained" color="primary" type="submit" fullwidth>
              Review
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
}

const initialValues = {
  card_no: "",
  name: "",
  exp_date: "",
  cvc: "",
  shipping_zip: "",
  shipping_country: "",
  shipping_address1: "",
  shipping_address2: "",

  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_zip: "",
  billing_country: "",
  billing_address1: "",
  billing_address2: ""
};

const checkoutSchema = yup.object().shape({
  card_no: yup.string().required("required"),
  name: yup.string().required("required"),
  exp_date: yup.string().required("required"),
  cvc: yup.string().required("required")
  // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.string().required("required"),
  // billing_address1: yup.string().required("required"),
});
