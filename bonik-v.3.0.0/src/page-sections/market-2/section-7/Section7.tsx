import Grid from "@component/grid/Grid";
import Divider from "@component/Divider";
import Container from "@component/Container";
import { H4, Paragraph, Span } from "@component/Typography";

// STYLED COMPONENTS
import { BannerBox } from "./styles";

export default function Section7() {
  return (
    <Container my="4rem">
      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <BannerBox img="/assets/images/banners/banner-21.jpg">
            <H4>Final Reduction</H4>

            <H4 fontSize={27} fontWeight={700}>
              Sale up to 20% Off
            </H4>

            <Divider width={60} my=".5rem" height={2} bg="dark.main" />

            <Paragraph fontSize={16}>
              Only From{" "}
              <Span fontWeight={700} color="primary.main" fontSize={21}>
                $270.00
              </Span>
            </Paragraph>
          </BannerBox>
        </Grid>

        <Grid item md={6} xs={12}>
          <BannerBox img="/assets/images/banners/banner-22.jpg">
            <H4 color="white">Weekend Sale</H4>

            <H4 fontSize={27} fontWeight={700} color="white">
              Fine Smart Speaker
            </H4>

            <Divider width={60} my=".5rem" height={2} />

            <Paragraph fontSize={16} color="white">
              Starting at{" "}
              <Span fontWeight={700} color="primary.main" fontSize={21}>
                $185.00
              </Span>
            </Paragraph>
          </BannerBox>
        </Grid>
      </Grid>
    </Container>
  );
}
