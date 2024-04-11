"use client";

import Link from "next/link";

import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import LazyImage from "@component/LazyImage";
import { Button } from "@component/buttons";
import { H3, Paragraph } from "@component/Typography";
import { OfferCard } from "@models/grocery-3.model";
// STYLED COMPONENT
import { StyledCard } from "./styles";

// ============================================================
type Props = { offerProducts: OfferCard[] };
// ============================================================

export default function Section2({ offerProducts }: Props) {
  return (
    <Grid container spacing={6}>
      {offerProducts.map((item, ind) => (
        <Grid key={ind} item md={6} sm={12} xs={12}>
          <Link href="#">
            <StyledCard>
              <Box width="60%">
                <Paragraph fontWeight={600}>{item.title}</Paragraph>
                <H3 mb={3} fontSize={25} lineHeight={1.35}>
                  {item.discountOffer}
                </H3>

                <Button color="primary" variant="outlined">
                  {item.buttonText}
                </Button>
              </Box>

              <Box width="40%">
                <LazyImage width={100} height={100} src={item.imgUrl} alt="bonik" />
              </Box>
            </StyledCard>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
