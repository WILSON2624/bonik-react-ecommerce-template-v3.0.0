import Link from "next/link";

import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import NextImage from "@component/NextImage";
import Typography, { H3, Span } from "@component/Typography";
// IMAGES
import bagImage from "../../../../public/assets/images/products/paper-bag.png";

export default function Card4() {
  return (
    <Link href="/">
      <Card boxShadow="border" height="100%" borderRadius={4} hoverEffect>
        <Grid container spacing={0} flexWrap="wrap-reverse" containerHeight="100%">
          <Grid item md={6} sm={7} xs={12}>
            <Box p="2rem 2rem 0px">
              <Typography color="text.muted" mb="0.5rem">
                SPECIAL OFFER
              </Typography>

              <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
                <Span color="primary.main" fontSize="30px">
                  $100 Off
                </Span>{" "}
                Over $1200
              </H3>

              <Typography color="text.muted" mb="1rem">
                Handcrafted from genuine Italian
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6} sm={5} xs={12}>
            <Box height="100%" maxHeight="200px" position="relative">
              <NextImage alt="model" fill src={bagImage} style={{ objectFit: "contain" }} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
}
