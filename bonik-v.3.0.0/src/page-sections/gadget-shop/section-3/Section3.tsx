"use client";

import Grid from "@component/grid/Grid";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { Card2 } from "../showcase-cards";

// ===================================================
type Props = { bannerData: any[] };
// ===================================================

export default function Section3({ bannerData }: Props) {
  return (
    <CategorySectionCreator>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Card2
            productUrl="/"
            title={bannerData[0].title}
            imgUrl={bannerData[0].thumbnail}
            subtitle={bannerData[0].description}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Card2
            color="white"
            productUrl="/"
            bg="text.muted"
            subtitleColor="gray.400"
            title={bannerData[1].title}
            imgUrl={bannerData[1].thumbnail}
            subtitle={bannerData[1].description}
          />
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
}
