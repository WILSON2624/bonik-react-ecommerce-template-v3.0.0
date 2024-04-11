import Link from "next/link";

import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import NextImage from "@component/NextImage";
import Typography from "@component/Typography";
import CategorySectionHeader from "@component/CategorySectionHeader";
import Category from "@models/category.model";

// ============================================================
type Props = { categories: Category[] };
// ============================================================

export default function Section10({ categories }: Props) {
  return (
    <Container mb="70px">
      <CategorySectionHeader title="Categories" iconName="categories" seeMoreLink="#" />

      <Grid container spacing={6}>
        {categories.map((item) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={item.id}>
            <Link href="/">
              <Card
                hoverEffect
                p="0.75rem"
                display="flex"
                borderRadius={8}
                boxShadow="small"
                alignItems="center">
                <Box width={50} height={50}>
                  <NextImage width={52} height={52} alt="fashion" src={item.image} />
                </Box>

                <Typography fontWeight={600} fontSize={14} ml="8px">
                  {item.name}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
