import Box from "@component/Box";
// PAGE SECTION COMPONENTS
import Footer from "@sections/landing/footer";
import Section1 from "@sections/landing/Section1";
import Section2 from "@sections/landing/Section2";
import Section3 from "@sections/landing/Section3";
import Section4 from "@sections/landing/Section4";
import Section5 from "@sections/landing/Section5";

export default function Home() {
  return (
    <Box id="top" overflow="hidden" bg="gray.white">
      {/* HEADER & BANNER SECTION */}
      <Section1 />

      {/* FEATURES SECTION */}
      <Section2 />

      {/* PRODUCT MODEL & REST API SECTION */}
      <Section5 />

      {/* DEMOS & PAGES SECTION */}
      <Section3 />

      {/* TECHNOLOGY USED SECTION */}
      <Section4 />

      {/* FOOTER SECTION */}
      <Footer />
    </Box>
  );
}
