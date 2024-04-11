"use client";

import styled from "styled-components";
import * as yup from "yup";
import { Formik } from "formik";

import Card from "@component/Card";
import Image from "@component/Image";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import DropZone from "@component/DropZone";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";

import Product from "@models/product.model";

// STYLED COMPONENT
const UploadImageBox = styled("div")(({ theme }) => ({
  width: 70,
  height: 70,
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  marginRight: ".5rem",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.primary[100]
}));

// ==============================================================
type Option = { label: string; value: string };

interface Props {
  product?: Product;
  categoryOptions: Option[];
}
// ==============================================================

export default function ProductUpdateForm({ product, categoryOptions }: Props) {
  const initialValues = {
    name: product?.title || "",
    price: product?.price || "",
    tags: "",
    stock: "",
    sale_price: "",
    description: "",
    category: ""
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("required"),
    category: yup.string().required("required"),
    description: yup.string().required("required"),
    stock: yup.number().required("required"),
    price: yup.number().required("required"),
    sale_price: yup.number().required("required"),
    tags: yup.object().required("required")
  });

  const handleFormSubmit = async (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Card p="30px" borderRadius={8}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  name="name"
                  label="Name"
                  placeholder="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorText={touched.name && errors.name}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Select
                  isMulti
                  label="Caterogy"
                  value={values.category}
                  options={categoryOptions}
                  placeholder="Select category"
                  onChange={(value) => setFieldValue("category", value)}
                  errorText={touched.category && errors.category}
                />
              </Grid>

              <Grid item xs={12}>
                <DropZone onChange={(files) => console.log(files)} />

                <FlexBox flexDirection="row" mt={2} flexWrap="wrap">
                  {product?.images?.map((item, i) => (
                    <UploadImageBox key={i}>
                      <Image src={item} width="100%" />
                    </UploadImageBox>
                  ))}
                </FlexBox>
              </Grid>

              <Grid item xs={12}>
                <TextArea
                  rows={6}
                  fullwidth
                  name="description"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Description"
                  value={values.description}
                  errorText={touched.description && errors.description}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  name="stock"
                  label="Stock"
                  placeholder="Stock"
                  onBlur={handleBlur}
                  value={values.stock}
                  onChange={handleChange}
                  errorText={touched.stock && errors.stock}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  name="tags"
                  label="Tags"
                  placeholder="Tags"
                  value={values.tags}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorText={touched.tags && errors.tags}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  name="price"
                  type="number"
                  onBlur={handleBlur}
                  value={values.price}
                  label="Regular Price"
                  onChange={handleChange}
                  placeholder="Regular Price"
                  errorText={touched.price && errors.price}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullwidth
                  type="number"
                  name="sale_price"
                  label="Sale Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Sale Price"
                  value={values.sale_price}
                  errorText={touched.sale_price && errors.sale_price}
                />
              </Grid>
            </Grid>

            <Button mt="25px" variant="contained" color="primary" type="submit">
              Save product
            </Button>
          </form>
        )}
      </Formik>
    </Card>
  );
}
