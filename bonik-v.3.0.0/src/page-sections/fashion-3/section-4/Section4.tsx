import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import NextImage from "@component/NextImage";
import { H2, H3 } from "@component/Typography";
import SingleCategory from "./SingleCategory";
// STYLED COMPONENTS
import { ButtonWrapper, ContentBox } from "./styles";

export default function Section4() {
  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Top Categories
      </H2>

      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <Box style={{ width: "100%", height: "100%", position: "relative" }}>
            <NextImage
              width={580}
              height={580}
              alt="category"
              src="/assets/images/categories/1.jpg"
            />

            <ContentBox>
              <H2 fontSize={24}>PADDED CLOTHES</H2>
              <H3 fontSize={22} fontWeight={400}>
                Collection
              </H3>
            </ContentBox>

            <ButtonWrapper>
              <Button variant="contained" color="primary">
                Women&#39;s
              </Button>

              <Button variant="contained" color="primary">
                Men&#39;s
              </Button>
            </ButtonWrapper>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <FlexBox
            height="100%"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between">
            <SingleCategory
              url="#"
              buttonText="Women's T-Shirt"
              img="/assets/images/categories/2.jpg"
            />

            <SingleCategory
              url="#"
              buttonText="Men's T-Shirt"
              img="/assets/images/categories/3.jpg"
            />
          </FlexBox>
        </Grid>
      </Grid>
    </Container>
  );
}
