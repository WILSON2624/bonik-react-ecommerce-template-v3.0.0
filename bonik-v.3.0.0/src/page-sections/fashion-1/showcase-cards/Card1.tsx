import Link from "next/link";
import Box from "@component/Box";
import Card from "@component/Card";
import NextImage from "@component/NextImage";
import Typography, { H3, Small, Span } from "@component/Typography";
// IMAGES
import shoeImage from "../../../../public/assets/images/products/shoes-1.png";

export default function Card1() {
  return (
    <Link href="/">
      <Card p="2.5rem" boxShadow="border" height="100%" borderRadius={4} hoverEffect>
        <Box mb="3.5rem">
          <Typography color="text.muted" mb="0.5rem">
            SPECIAL OFFER
          </Typography>

          <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
            <Span color="primary.main" fontSize="30px">
              Comfortable
            </Span>{" "}
            Original Cotton Sneaker
          </H3>

          <Typography color="text.muted" mb="1rem">
            Handcrafted from genuine Italian leather. One inner compartment with black satin lining
          </Typography>

          <Small fontWeight="700" borderBottom="2px solid" borderColor="primary.main">
            SHOP NOW
          </Small>
        </Box>

        <NextImage alt="shoes" src={shoeImage} />
      </Card>
    </Link>
  );
}
