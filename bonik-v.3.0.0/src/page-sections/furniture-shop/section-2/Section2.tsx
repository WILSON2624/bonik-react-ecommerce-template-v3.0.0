"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H1, H3, H6, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { LeftContentBox, RightContent, RightContentBox, StyledButton } from "./styles";

export default function Section2() {
  const router = useRouter();

  const product1 = "/assets/images/Furniture Shop/Furniture (6).png";
  const product2 = "/assets/images/Furniture Shop/Furniture (5).png";
  const product3 = "/assets/images/Furniture Shop/Furniture (1).png";
  const product4 = "/assets/images/Furniture Shop/Furniture (3).png";
  const product5 = "/assets/images/Furniture Shop/Furniture (4).png";

  return (
    <Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <Link href="/sale-page-1">
            <LeftContentBox imgUrl={product1}>
              <RightContent>
                <H6>Modern Furniture.</H6>
                <H1 fontSize={35} color="primary.main">
                  Big Sale
                </H1>
                <H3 fontSize={23}>UP TO 50% OFF</H3>
                <StyledButton>Shop Now</StyledButton>
              </RightContent>
            </LeftContentBox>
          </Link>
        </Grid>

        <Grid item xs={12} md={5}>
          <Link href="/sale-page-1">
            <RightContentBox imgUrl={product2} mb={2}>
              <Box textAlign="center" pt={3}>
                <H6>Sofa Collection</H6>
                <H3 fontSize={23} color="primary.main">
                  UP TO 60% OFF
                </H3>
                <StyledButton>Shop Now</StyledButton>
              </Box>
            </RightContentBox>
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <Link href="/sale-page-1">
            <RightContentBox
              imgUrl={product4}
              style={{
                height: 484,
                paddingTop: "20px",
                paddingLeft: "80px",
                paddingRight: "80px"
              }}>
              <Box textAlign="center">
                <H3>Winter Offer!</H3>
                <H1 fontSize={50} color="primary.main">
                  50% OFF
                </H1>
                <H6>All Kind of Furniture Items</H6>
                <StyledButton onClick={() => router.push("/sale-page-1")}>Shop Now</StyledButton>
              </Box>
              <Box className="content" />
            </RightContentBox>
          </Link>
        </Grid>

        <Grid item xs={12} md={5}>
          <Link href="/sale-page-1">
            <LeftContentBox imgUrl={product5} style={{ padding: "20px auto 20px 20px" }}>
              <RightContent>
                <Paragraph>Modern & Comfortable</Paragraph>
                <H3 fontSize={20} color="primary.main">
                  Chair Collection
                </H3>

                <StyledButton>Shop Now</StyledButton>
              </RightContent>
            </LeftContentBox>
          </Link>

          <Link href="/sale-page-1">
            <LeftContentBox
              imgUrl={product3}
              style={{ marginTop: 24, padding: "20px auto 20px 20px" }}>
              <RightContent>
                <Paragraph>December New!</Paragraph>
                <H3 fontSize={20} color="primary.main">
                  Sofa Chair
                </H3>

                <StyledButton>Shop Now</StyledButton>
              </RightContent>
            </LeftContentBox>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
}
