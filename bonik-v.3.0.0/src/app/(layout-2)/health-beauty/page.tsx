import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import { Footer2 } from "@component/footer";
import SideNavbar2 from "@component/sidenav/SideNavbar2";
import SidenavContainer from "@component/SidenavContainer";
// API FUNCTIONS
import api from "@utils/__api__/health-beauty";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/health-beauty/section-1";
import Section2 from "@sections/health-beauty/section-2";
import Section3 from "@sections/health-beauty/section-3";
import Section4 from "@sections/health-beauty/section-4";
import Section5 from "@sections/health-beauty/section-5";

export default async function HealthBeautyShop() {
  const FIXED_ID = "banner-area";
  const serviceList = await api.getServices();
  const allProducts = await api.getProducts();
  const navigationList = await api.getNavigation();
  const topNewProducts = await api.getTopNewProducts();
  const mainCarouselData = await api.getMainCarousel();

  return (
    <Fragment>
      {/* HERO CAROUSEL AREA */}
      <Section1 id={FIXED_ID} carouselData={mainCarouselData} />

      {/* SIDEBAR WITH MAIN CONTENT AREA */}
      <SidenavContainer
        navFixedComponentID={FIXED_ID}
        SideNav={<SideNavbar2 navList={navigationList} />}>
        {/* BANNER AREA */}
        <Box mb="4rem">
          <Section2 />
        </Box>

        {/* TOP NEW PRODUCTS AREA */}
        <Section3 title="Top New Products" products={topNewProducts} />

        {/* ALL PRODUCTS AREA */}
        <Section4 products={allProducts} />

        {/* SERVICES AREA */}
        <Section5 services={serviceList as any} />

        {/* FOOTER AREA */}
        <Footer2 />
      </SidenavContainer>
    </Fragment>
  );
}
