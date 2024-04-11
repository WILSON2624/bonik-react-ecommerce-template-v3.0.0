import Link from "next/link";
import Box from "@component/Box";
import Card from "@component/Card";
import NextImage from "@component/NextImage";
import Typography, { H3, Small, Span } from "@component/Typography";
// IMAGES
import jacketImage from "../../../../public/assets/images/products/jacket.png";

export default function Card2() {
  return (
    <Link href="/">
      <Card p="2.5rem" boxShadow="border" height="100%" borderRadius={4} hoverEffect>
        <NextImage alt="shoes" src={jacketImage} />

        <Box mt="3.5rem">
          <Typography color="text.muted" mb="0.5rem">
            WOMEN'S HANDBAG
          </Typography>

          <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
            <Span color="primary.main" fontSize="30px">
              Minimalist
            </Span>{" "}
            Genuine Cotton Jacket
          </H3>

          <Typography color="text.muted" mb="1rem">
            Handcrafted from genuine Italian leather. One inner compartment with black satin lining
          </Typography>

          <Small fontWeight="700" borderBottom="2px solid" borderColor="primary.main">
            SHOP NOW
          </Small>
        </Box>
      </Card>
    </Link>
  );
}
