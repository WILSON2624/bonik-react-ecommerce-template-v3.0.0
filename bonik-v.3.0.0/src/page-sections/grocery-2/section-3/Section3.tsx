import Link from "next/link";
import NextImage from "next/image";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { H3, H5, Tiny } from "@component/Typography";
import Category from "@models/category.model";

// ===========================================================
type Props = { categories: Category[] };
// ===========================================================

export default function Section3({ categories }: Props) {
  return (
    <div>
      <H3 fontSize="25px" mb="2rem">
        Shop By Category
      </H3>

      <Grid container spacing={6}>
        {categories.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <Link href="#">
              <FlexBox
                as={Card}
                px="2rem"
                py="1rem"
                height="100%"
                borderRadius={8}
                hoverEffect={true}
                alignItems="center">
                <NextImage
                  width={46}
                  height={46}
                  alt="bonik"
                  src={item.image}
                  objectFit="contain"
                />

                <Box ml="2rem" flex={1} overflow="hidden">
                  <Tiny color="primary.main">{item.description}</Tiny>
                  <H5 ellipsis>{item.name}</H5>
                </Box>
              </FlexBox>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
