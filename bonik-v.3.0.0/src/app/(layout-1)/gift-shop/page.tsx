import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/gift";
// GLOBAL CUSTOM COMPONENTS
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/gift-shop/section-1";
import Section2 from "@sections/gift-shop/section-2";
import Section3 from "@sections/gift-shop/section-3";
import Section4 from "@sections/gift-shop/section-4";
import Section5 from "@sections/gift-shop/section-5";
import Section6 from "@sections/gift-shop/section-6";
import ContentBox from "@sections/gift-shop/content-box";
// CUSTOM DATA MODEL
import Category from "@models/category.model";

export default async function GiftShop() {
  const allProducts = await api.getAllProducts();
  const serviceList = await api.getServiceList();
  const topCategories = await api.getTopCategories();
  const carouselData = await api.getMainCarouselData();
  const popularProducts = await api.getPopularProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  const categoryNavigation = await api.getCategoryNavigation();

  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      {/* HERO CAROUSEL AREA */}
      <Section1 carouselData={carouselData} />

      <Container>
        <ContentBox categoryNavigation={categoryNavigation}>
          {/* SERVICES AREA */}
          <Section2 services={serviceList} />

          {/* DISCOUNT BANNER AREA */}
          <Section3 />

          {/* TOP CATEGORIES AREA */}
          <Section4 categoryList={topCategories as Category[]} />
        </ContentBox>

        {/* POPULAR PRODUCTS AREA */}
        <Section5 products={popularProducts} title="Popular Items" />

        {/* TOP SALE PRODUCTS AREA */}
        <Section5 products={topSailedProducts} title="Top Sale Items" />

        {/* ALL PRODUCTS AREA */}
        <Section6 products={allProducts} />
      </Container>
    </Fragment>
  );
}
