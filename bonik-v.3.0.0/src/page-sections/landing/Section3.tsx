"use client";

import { useState } from "react";
import styled from "styled-components";

import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import { H2, H4, Paragraph } from "@component/Typography";

import PageCard from "./PageCard";

// STYLED COMPONENT
const SectionWrapper = styled("div")`
  margin-bottom: 7rem;
  background: url(/assets/images/landing/landing-bg-2.svg) center/contain no-repeat;
`;

export default function Section3() {
  const [selectedTab, setSelectedTab] = useState(0);

  const page = [demoPageList, shopPageList, customerPageList, vendorPageList];
  const list = page[selectedTab];

  const handleTabChange = (ind: number) => () => setSelectedTab(ind);

  return (
    <SectionWrapper id="demos">
      <Container id="section-3" position="relative">
        <Box maxWidth="830px" mx="auto" mb="100px" textAlign="center">
          <H4 color="primary.main" fontSize="58px" fontWeight="700">
            35+
          </H4>

          <Paragraph color="primary.main" fontSize="18px">
            Server side rendered
          </Paragraph>

          <H2
            mb="2rem"
            fontSize="27px"
            fontWeight="900"
            color="secondary.main"
            style={{ textTransform: "uppercase" }}>
            Demos & Pages
          </H2>

          <FlexBox justifyContent="center" flexWrap="wrap" m="-0.5rem">
            {["Demos", "Shop Pages", "User Account", "Vendor Account"].map((item, ind) => (
              <Button
                key={item}
                m="0.5rem"
                color="primary"
                onClick={handleTabChange(ind)}
                variant={selectedTab === ind ? "contained" : "outlined"}>
                {item}
              </Button>
            ))}
          </FlexBox>
        </Box>

        <Grid container spacing={8}>
          {list.map((item) => (
            <Grid item lg={4} md={6} xs={12} key={item.previewUrl}>
              <PageCard badge={item.new} {...item} />
            </Grid>
          ))}
        </Grid>

        <a href="https://1.envato.market/oeNbNe">
          <Button variant="contained" color="primary" minWidth="125px" mx="auto" mt="2.25rem">
            Purchase Now
          </Button>
        </a>
      </Container>
    </SectionWrapper>
  );
}

const demoPageList = [
  {
    imgUrl: "/assets/images/landing/page-1.png",
    previewUrl: "/market-1",
    title: "Market 1",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/market-2.png",
    previewUrl: "/market-2",
    title: "Market 2",
    new: true
  },
  {
    imgUrl: "/assets/images/landing/page-4.png",
    previewUrl: "/gadget-shop",
    title: "Gadget Shop",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/grocery-1.png",
    previewUrl: "/grocery-1",
    title: "Grocery 1",
    new: true
  },
  {
    imgUrl: "/assets/images/landing/grocery-2.png",
    previewUrl: "/grocery-2",
    title: "Grocery 2",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/grocery-3.png",
    previewUrl: "/grocery-3",
    title: "Grocery 3",
    new: true
  },
  {
    imgUrl: "/assets/images/landing/page-3.png",
    previewUrl: "/fashion-1",
    title: "Fashion 1",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/fashion-2.png",
    previewUrl: "/fashion-2",
    title: "Fashion 2",
    new: true
  },
  {
    imgUrl: "/assets/images/landing/fashion-3.png",
    previewUrl: "/fashion-3",
    title: "Fashion 3",
    new: true
  },
  {
    imgUrl: "/assets/images/landing/gift-shop.png",
    previewUrl: "/gift-shop",
    title: "Gift Shop",
    new: true
  },
  {
    imgUrl: "/assets/images/landing/furniture.png",
    previewUrl: "/furniture-shop",
    title: "Furniture Shop",
    new: true
  },
  {
    imgUrl: "/assets/images/landing/health-beauty.png",
    previewUrl: "/health-beauty",
    title: "Health Beauty Shop",
    new: true
  }
];

const shopPageList = [
  {
    imgUrl: "/assets/images/landing/shop/page-7.png",
    previewUrl: "/sale-page-1",
    title: "Sale Page 1",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/shop/page-8.png",
    previewUrl: "/sale-page-2",
    title: "Sale Page 2",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/shop/page-2.png",
    previewUrl: "/shops/scarlett-beauty",
    title: "Shop",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/shop/page-6.png",
    previewUrl: "/product/lord-2019",
    title: "Product Details",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/shop/page-3.png",
    previewUrl: "/cart",
    title: "Cart",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/shop/page-4.png",
    previewUrl: "/checkout",
    title: "Checkout",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/shop/page-5.png",
    previewUrl: "/checkout-alternative",
    title: "Checkout Alternative",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/shop/page-1.png",
    previewUrl: "/shops",
    title: "Shop List",
    new: false
  }
];

const vendorPageList = [
  {
    imgUrl: "/assets/images/landing/vendor/page-1.png",
    previewUrl: "/vendor/dashboard",
    title: "Dashboard",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-2.png",
    previewUrl: "/vendor/account-settings",
    title: "Account Settings",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-3.png",
    previewUrl: "/vendor/products",
    title: "Products",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-4.png",
    previewUrl: "/vendor/products/create",
    title: "Add Product",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-5.png",
    previewUrl: "/vendor/orders",
    title: "Orders",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-1.png",
    previewUrl: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
    title: "Order Details",
    new: false
  }
];

const customerPageList = [
  {
    imgUrl: "/assets/images/landing/customer/page-5.png",
    previewUrl: "/profile",
    title: "Profile",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-6.png",
    previewUrl: "/profile/edit",
    title: "Edit Profile",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-2.png",
    previewUrl: "/orders",
    title: "Orders",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-1.png",
    previewUrl: "/address",
    title: "Addresses",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-3.png",
    previewUrl: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
    title: "Order Details",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-4.png",
    previewUrl: "/payment-methods",
    title: "Payment Methods",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-7.png",
    previewUrl: "/support-tickets",
    title: "Support Tickets",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-8.png",
    previewUrl: "/support-tickets/product-broken.-i-need-refund",
    title: "Ticket Details",
    new: false
  },
  {
    imgUrl: "/assets/images/landing/customer/page-9.png",
    previewUrl: "/wish-list",
    title: "Wish List",
    new: false
  }
];
