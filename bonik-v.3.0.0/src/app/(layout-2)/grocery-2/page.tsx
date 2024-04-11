// API FUNCTIONS
import api from "@utils/__api__/grocery-2";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import { Footer2 } from "@component/footer";
// PAGE SECTION COMPONENTS
import Wrapper from "@sections/grocery-2/Wrapper";
import SidenavBar from "@sections/grocery-2/SidenavBar";
import Section1 from "@sections/grocery-2/section-1";
import Section2 from "@sections/grocery-2/section-2";
import Section3 from "@sections/grocery-2/section-3";
import Section4 from "@sections/grocery-2/section-4";
import Section5 from "@sections/grocery-2/section-5";
import Section6 from "@sections/grocery-2/section-6";

export default async function GroceryTwo() {
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const testimonials = await api.getTestimonials();
  const dairyProducts = await api.getDairyProducts();
  const navigationList = await api.getNavigationList();
  const mainCarouselData = await api.getMainCarousel();
  const featuredProducts = await api.getFeaturedProducts();
  const bestHomeProducts = await api.getBestHomeProducts();
  const bestSellProducts = await api.getBestSellProducts();
  const discountBanners = await api.getDiscountBannerList();

  return (
    <Wrapper>
      {/* SIDEBAR NAVIGATION AREA */}
      <Box className="sidenav" pt="1.5rem">
        <SidenavBar isFixedNave={true} navList={navigationList} />
      </Box>

      <Box className="content" pt="1.5rem">
        {/* HERO CAROUSEL AREA */}
        <Section1 carouselData={mainCarouselData} />

        {/* SERVICES AREA */}
        <Box mb="3rem" overflow="hidden">
          <Section2 services={serviceList} />
        </Box>

        {/* SHOP BY CATEGORY AREA */}
        <Box mb="3rem">
          <Section3 categories={categories} />
        </Box>

        {/* FEATURED PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Featured Items" products={featuredProducts} />
        </Box>

        {/* BEST SELLER PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Best Seller in Your Area" products={bestSellProducts} />
        </Box>

        {/* DISCOUNT BANNER CAROUSEL AREA */}
        <Box mb="3rem">
          <Section5 cardList={discountBanners} />
        </Box>

        {/* BEST HOME PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Best of Home Essentials" products={bestHomeProducts} />
        </Box>

        {/* SNACK AND DRINKS PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Snacks, Drinks, Dairy & More" products={dairyProducts} />
        </Box>

        {/* TESTIMONIAL CAROUSEL AREA */}
        <Box mb="3rem">
          <Section6 testimonials={testimonials} />
        </Box>

        {/* FOOTER AREA */}
        <Footer2 />
      </Box>
    </Wrapper>
  );
}
