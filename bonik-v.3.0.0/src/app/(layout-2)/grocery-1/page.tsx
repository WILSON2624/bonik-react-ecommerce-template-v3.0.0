import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/grocery-1";
// GLOBAL CUSTOM COMPONENTS
import { Footer2 } from "@component/footer";
import SideNavbar from "@component/sidenav/SideNavbar";
import SidenavContainer from "@component/SidenavContainer";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/grocery-1/section-1";
import Section2 from "@sections/grocery-1/section-2";
import Section3 from "@sections/grocery-1/section-3";
import Section4 from "@sections/grocery-1/section-4";
import Section5 from "@sections/grocery-1/section-5";

export default async function GroceryOne() {
  const FIXED_ID = "services-area";
  const products = await api.getProducts();
  const serviceList = await api.getServices();
  const popularProducts = await api.getPopularProducts();
  const trendingProducts = await api.getTrendingProducts();
  const grocery1NavList = await api.getGrocery1Navigation();

  return (
    <Fragment>
      {/* HERO AREA */}
      <Section1 />

      {/* SERVICES AREA */}
      <Section2 id={FIXED_ID} services={serviceList} />

      {/* SIDEBAR NAVIGATION WITH MAIN CONTENT AREA */}
      <SidenavContainer
        navFixedComponentID={FIXED_ID}
        SideNav={<SideNavbar navList={grocery1NavList} />}>
        {/* POPULAR PRODUCTS CAROUSEL AREA */}
        <Section3 title="Popular Products" products={popularProducts} />

        {/* TRENDING PRODUCTS CAROUSEL AREA */}
        <Section3 title="Trending Products" products={trendingProducts} />

        {/* ALL PRODUCTS AREA */}
        <Section4 products={products} />

        {/* DISCOUNT BANNER AREA */}
        <Section5 />

        {/* FOOTER AREA */}
        <Footer2 />
      </SidenavContainer>
    </Fragment>
  );
}
