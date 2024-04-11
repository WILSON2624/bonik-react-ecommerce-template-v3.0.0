import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/fashion-1";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/fashion-1/Section1";
import Section2 from "@sections/fashion-1/Section2";
import Section3 from "@sections/fashion-1/Section3";
import Section4 from "@sections/fashion-1/Section4";
import Section5 from "@sections/fashion-1/Section5";
import Section6 from "@sections/fashion-1/Section6";
import Section7 from "@sections/fashion-1/Section7";
import Section8 from "@sections/fashion-1/Section8";
import Section9 from "@sections/fashion-1/Section9";

export default async function FashionOne() {
  const hotDealList = await api.getHotDealList();
  const serviceList = await api.getServiceList();
  const flashDealsData = await api.getFlashDeals();
  const trendingItems = await api.getTrendingItems();
  const newArrivalsData = await api.getNewArrivals();
  const dealOfTheWeek = await api.getDealOfTheWeekList();

  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      <Container my="2rem">
        {/* DISCOUNT BANNER AREA */}
        <Section1 />

        {/* SERVICES AND SPECIAL OFFER AREA */}
        <Box mb="3.75rem">
          <Section2 />
        </Box>

        {/* FLASH DEAL PRODUCTS AREA */}
        <Section3 products={flashDealsData} />

        {/* NEW ARRIVAL PRODUCTS AREA */}
        <Section4 products={newArrivalsData} />

        {/* DEALS OF WEEK PRODUCTS AREA */}
        <Section5 list={dealOfTheWeek} />

        {/* DEAL OF THE DAY CAROUSEL AREA */}
        <Section6 list={hotDealList} />

        {/* TRENDING PRODUCTS AREA */}
        <Section7 products={trendingItems} />

        {/* SERVICES AREA */}
        <Section8 serviceList={serviceList} />

        {/* NEWSLETTER AREA */}
        <Section9 />
      </Container>
    </Fragment>
  );
}
