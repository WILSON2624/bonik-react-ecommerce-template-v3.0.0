import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/grocery-3";
// GLOBAL CUSTOM COMPONENTS
import Container from "@component/Container";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/grocery-3/section-1";
import Section2 from "@sections/grocery-3/section-2";
import Section3 from "@sections/grocery-3/section-3";
import Section4 from "@sections/grocery-3/section-4";

export default async function GroceryThree() {
  const offerCards = await api.getOfferCards();
  const allProducts = await api.getAllProducts();
  const mainCarouselData = await api.getMainCarousel();
  const topSailedProducts = await api.getTopSailedProducts();

  return (
    <Fragment>
      {/* HERO CAROUSEL AREA */}
      <Section1 carouselData={mainCarouselData} />

      <Container>
        {/* OFFER PRODUCTS AREA */}
        <Section2 offerProducts={offerCards} />

        {/* TOP SAILED PRODUCTS AREA */}
        <Section3 products={topSailedProducts} />

        {/* ALL PRODUCTS AREA */}
        <Section4 products={allProducts} />
      </Container>
    </Fragment>
  );
}
