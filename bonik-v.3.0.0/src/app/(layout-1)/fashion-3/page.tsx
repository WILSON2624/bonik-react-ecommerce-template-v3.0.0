import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/fashion-3";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Navbar from "@component/navbar/Navbar";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/fashion-3/section-1";
import Section2 from "@sections/fashion-3/section-2";
import Section3 from "@sections/fashion-3/section-3";
import Section4 from "@sections/fashion-3/section-4";
import Section5 from "@sections/fashion-3/section-5";
import Section6 from "@sections/fashion-3/section-6";
import Section7 from "@sections/fashion-3/section-7";
import Section8 from "@sections/fashion-3/section-8";

export default async function FashionThree() {
  const blogs = await api.getBlogs();
  const products = await api.getProducts();
  const services = await api.getServices();
  const featureProducts = await api.getFeatureProducts();
  const mainCarouselData = await api.getMainCarouselData();

  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      <Box bg="white" pb="4rem">
        {/* HERO CAROUSEL AREA */}
        <Section1 carouselData={mainCarouselData} />

        {/* MEN AND WOMEN OFFERS AREA */}
        <Section2 />

        {/* BEST SELLING PRODUCTS AREA */}
        <Section3 products={products} />

        {/* TOP CATEGORIES AREA */}
        <Section4 />

        {/* SALE OFFER BANNERS AREA */}
        <Section5 />

        {/* FEATURED PRODUCTS AREA */}
        <Section6 products={featureProducts} />

        {/* SERVICE LIST AREA */}
        <Section7 services={services} />

        {/* BLOG LIST AREA */}
        <Section8 blogs={blogs} />
      </Box>
    </Fragment>
  );
}
