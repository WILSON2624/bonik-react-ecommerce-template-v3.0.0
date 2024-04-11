// API FUNCTIONS
import api from "@utils/__api__/market-1";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/market-1/Section1";
import Section2 from "@sections/market-1/Section2";
import Section3 from "@sections/market-1/Section3";
import Section4 from "@sections/market-1/Section4";
import Section5 from "@sections/market-1/Section5";
import Section6 from "@sections/market-1/Section6";
import Section7 from "@sections/market-1/Section7";
import Section8 from "@sections/market-1/Section8";
import Section10 from "@sections/market-1/Section10";
import Section11 from "@sections/market-1/Section11";
import Section12 from "@sections/market-1/Section12";
import Section13 from "@sections/market-1/Section13";

export default async function Market1() {
  const carList = await api.getCarList();
  const carBrands = await api.getCarBrands();
  const moreItems = await api.getMoreItems();
  const mobileList = await api.getMobileList();
  const opticsList = await api.getOpticsList();
  const mobileShops = await api.getMobileShops();
  const opticsShops = await api.getOpticsShops();
  const serviceList = await api.getServiceList();
  const mobileBrands = await api.getMobileBrands();
  const flashDealsData = await api.getFlashDeals();
  const opticsBrands = await api.getOpticsBrands();
  const bottomCategories = await api.getCategories();
  const topCategories = await api.getTopCategories();
  const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = await api.getMainCarousel();
  const newArrivalsList = await api.getNewArrivalList();
  const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await api.getTopRatedProduct();

  return (
    <main>
      {/* HERO CAROUSEL AREA */}
      <Section1 carouselData={mainCarouselData} />

      {/* FLASH DEAL PRODUCTS AREA */}
      <Section2 products={flashDealsData} />

      {/* TOP CATEGORIES AREA */}
      <Section3 categoryList={topCategories} />

      {/* TOP RATING AND BRANDS AREA */}
      <Section4 topRatedList={topRatedProducts} topRatedBrands={topRatedBrands} />

      {/* NEW ARRIVALS AREA */}
      <Section5 newArrivalsList={newArrivalsList} />

      {/* BIG DISCOUNT AREA */}
      <Section13 bigDiscountList={bigDiscountList} />

      {/* CAR LIST AREA */}
      <Section6 carBrands={carBrands} carList={carList} />

      {/* MOBILE PHONES AREA */}
      <Section7
        shops={mobileShops}
        brands={mobileBrands}
        title="Mobile Phones"
        productList={mobileList}
      />

      {/* DISCOUNT BANNERS AREA */}
      <Section8 />

      {/* OPTICS AND WATCH AREA */}
      <Section7
        shops={opticsShops}
        brands={opticsBrands}
        title="Optics / Watch"
        productList={opticsList}
      />

      {/* CATEGORIES AREA */}
      <Section10 categories={bottomCategories} />

      {/* MORE PRODUCTS AREA */}
      <Section11 moreItems={moreItems} />

      {/* SERVICES AREA */}
      <Section12 serviceList={serviceList} />
    </main>
  );
}
