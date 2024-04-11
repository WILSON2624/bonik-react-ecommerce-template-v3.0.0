import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/fashion-2";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Navbar from "@component/navbar/Navbar";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/fashion-2/section-1";
import Section2 from "@sections/fashion-2/section-2";
import Section3 from "@sections/fashion-2/section-3";
import Section4 from "@sections/fashion-2/section-4";
import Section5 from "@sections/fashion-2/section-5";
import Section6 from "@sections/fashion-2/section-6";
import Section7 from "@sections/fashion-2/section-7";
import Section8 from "@sections/fashion-2/section-8";
import Section9 from "@sections/fashion-2/section-9";
import Section10 from "@sections/fashion-2/section-10";

export default async function FashionTwo() {
  const blogs = await api.getBlogs();
  const brands = await api.getBrands();
  const products = await api.getProducts();
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const saleProducts = await api.getSaleProducts();
  const latestProducts = await api.getLatestProducts();
  const popularProducts = await api.getPopularProducts();
  const featureProducts = await api.getFeatureProducts();
  const bestWeekProducts = await api.getBestWeekProducts();
  const mainCarouselData = await api.getMainCarouselData();

  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      <Box bg="white">
        {/* HERO CAROUSEL AREA */}
        <Section1 data={mainCarouselData} />

        {/* SERVICES AREA */}
        <Section2 serviceList={serviceList} />

        {/* BEST SELLING CATEGORIES AREA */}
        <Section3 categories={categories} />

        {/* BEST SELLING PRODUCTS AREA */}
        <Section4 products={products} />

        {/* DISCOUNT OFFER BANNERS AREA */}
        <Section5 />

        {/* FEATURED PRODUCTS AREA */}
        <Section6 products={featureProducts} />

        {/* SUMMER SALE OFFER AREA */}
        <Section7 />

        {/* LATEST ARTICLES AREA */}
        <Section8 blogs={blogs} />

        {/* CLIENTS CAROUSEL AREA */}
        <Section9 brands={brands} />

        {/* SALE, LATEST, POPULAR PRODUCTS AREA */}
        <Section10
          saleProducts={saleProducts}
          latestProducts={latestProducts}
          popularProducts={popularProducts}
          bestWeekProducts={bestWeekProducts}
        />
      </Box>
    </Fragment>
  );
}
