import Link from "next/link";

import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import NextImage from "@component/NextImage";
import { H3, H5 } from "@component/Typography";
import CategorySectionCreator from "@component/CategorySectionCreator";
import Category from "@models/category.model";

// =====================================================
type Props = { categories: Category[] };
// =====================================================

export default function Section2({ categories }: Props) {
  const firstItem = categories[0];

  return (
    <CategorySectionCreator title="Featured Categories">
      <Grid container spacing={6} containerHeight="100%">
        <Grid item md={6} xs={12}>
          <Link href={`product/search/${firstItem.slug}`}>
            <Card height="100%" hoverEffect position="relative">
              <NextImage width={588} height={593} src={firstItem.image} alt="bonik" />
              <H3 fontWeight="600" style={{ position: "absolute", left: "1.5rem", bottom: "1rem" }}>
                {firstItem.name}
              </H3>
            </Card>
          </Link>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box height="100%">
            <Grid container spacing={6} containerHeight="100%">
              {categories.slice(1).map((item) => (
                <Grid item sm={6} xs={12} key={item.id}>
                  <Link href={`product/search/${firstItem.slug}`}>
                    <Card height="100%" hoverEffect>
                      <NextImage width={282} height={253} src={item.image} alt="bonik" />
                      <H5 fontWeight="600" p="1rem" mt="1rem">
                        {item.name}
                      </H5>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
}
