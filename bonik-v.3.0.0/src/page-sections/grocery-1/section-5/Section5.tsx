// "use client";

import Link from "next/link";

import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import NextImage from "@component/NextImage";
import { H1, Paragraph } from "components/Typography";
// IMAGES
import vegetableImage from "../../../../public/assets/images/Groceries Shop/vagitable.png";

// STYLED COMPONENT
import { StyledCard } from "./styles";

export default function Section5() {
  return (
    <StyledCard>
      <Link href="#">
        <Grid container>
          <Grid className="content" item md={7} xs={12}>
            <Paragraph>Till 10 Dec, 2021</Paragraph>
            <H1>25% Special Off Today</H1>
            <H1 mb={40}>Only for Vegetables</H1>
            <Button color="primary" variant="contained">
              Shop Now
            </Button>
          </Grid>

          <Grid item md={5}>
            <NextImage alt="discount" src={vegetableImage} />
          </Grid>
        </Grid>
      </Link>
    </StyledCard>
  );
}
