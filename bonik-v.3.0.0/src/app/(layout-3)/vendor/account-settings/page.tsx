"use client";

import { Fragment } from "react";
import { Formik } from "formik";
import * as yup from "yup";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Hidden from "@component/hidden";
import Select from "@component/Select";
import Avatar from "@component/avatar";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import { Card1 } from "@component/Card1";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// CUSTOM DATA
import countryList from "@data/countryList";

export default function AccountSettings() {
  const initialValues = {
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    email: "",
    contact: ""
  };

  const accountSchema = yup.object().shape({
    first_name: yup.string().required("required"),
    last_name: yup.string().required("required"),
    country: yup.mixed().required("required"),
    city: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().required("required")
  });

  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <Fragment>
      <DashboardPageHeader title="Account" iconName="settings_filled" />

      <Card1 p="24px 30px" borderRadius={8}>
        <Box
          mb="1.5rem"
          height="173px"
          overflow="hidden"
          borderRadius="10px"
          position="relative"
          style={{ background: "url(/assets/images/banners/banner-10.png) center/cover" }}>
          <Box display="flex" alignItems="flex-end" position="absolute" bottom="20px" left="24px">
            <Avatar
              size={80}
              border="4px solid"
              borderColor="gray.100"
              src="/assets/images/faces/propic(9).png"
            />

            <Box ml="-20px" zIndex={1}>
              <label htmlFor="profile-image">
                <Button
                  p="6px"
                  as="span"
                  size="small"
                  height="auto"
                  bg="gray.300"
                  color="secondary"
                  borderRadius="50%">
                  <Icon>camera</Icon>
                </Button>
              </label>
            </Box>

            <Hidden>
              <input
                className="hidden"
                onChange={(e) => console.log(e.target.files)}
                id="profile-image"
                accept="image/*"
                type="file"
              />
            </Hidden>
          </Box>

          <Box display="flex" alignItems="flex-end" position="absolute" top="20px" right="24px">
            <label htmlFor="cover-image">
              <Button
                as="span"
                size="small"
                bg="primary.light"
                color="secondary"
                height="auto"
                p="6px"
                borderRadius="50%">
                <Icon color="primary">camera</Icon>
              </Button>
            </label>

            <Hidden>
              <input
                className="hidden"
                onChange={(e) => console.log(e.target.files)}
                id="cover-image"
                accept="image/*"
                type="file"
              />
            </Hidden>
          </Box>
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={accountSchema}
          onSubmit={handleFormSubmit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Box mb="30px">
                <Grid container horizontal_spacing={6} vertical_spacing={4}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="first_name"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.first_name}
                      errorText={touched.first_name && errors.first_name}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="last_name"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.last_name}
                      errorText={touched.last_name && errors.last_name}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="email"
                      type="email"
                      label="Email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      errorText={touched.email && errors.email}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      type="tel"
                      label="Phone"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.contact}
                      onChange={handleChange}
                      errorText={touched.contact && errors.contact}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <Select
                      label="Country"
                      options={countryList}
                      value={values.country || "US"}
                      errorText={touched.country && errors.country}
                      onChange={(country) => setFieldValue("country", country)}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="city"
                      label="City"
                      value={values.city}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={touched.city && errors.city}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      </Card1>
    </Fragment>
  );
}
