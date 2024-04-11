import Image from "next/image";

import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import { H2, H4 } from "@component/Typography";
import Category from "@models/category.model";
// STYLED COMPONENTS
import { CategoryTitle, Wrapper } from "./styles";

// ===========================================================
type Section3Props = { categories: Category[] };
// ===========================================================

export default function Section3({ categories }: Section3Props) {
  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Best selling Categories
      </H2>

      <Grid container spacing={6}>
        {categories.map((item) => (
          <Grid item md={3} sm={6} xs={12} key={item.id}>
            <Wrapper>
              <Image
                width={300}
                height={300}
                alt="category"
                src={item.image}
                style={{ width: "100%", objectFit: "cover" }}
              />

              <CategoryTitle className="category-title">
                <H4>{item.name}</H4>
              </CategoryTitle>
            </Wrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
