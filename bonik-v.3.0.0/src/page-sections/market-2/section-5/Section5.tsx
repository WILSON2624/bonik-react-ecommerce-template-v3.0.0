import Grid from "@component/grid/Grid";
import NavLink from "@component/nav-link";
import Container from "@component/Container";
import { BannerCard3 } from "@component/banners";
import { H4, Paragraph, Span } from "@component/Typography";

export default function Section5() {
  return (
    <Container pt="4rem">
      <Grid container spacing={5}>
        <Grid item md={4} xs={12}>
          <BannerCard3 img="/assets/images/banners/banner-18.jpg">
            <Paragraph fontSize={13} letterSpacing={1.2}>
              NEW ARRIVALS
            </Paragraph>

            <H4 fontSize={20} lineHeight={1} my="1rem">
              SKI CLOTHES SALE
              <br />
              <Span fontWeight={400} color="primary.main">
                Up to 35% Off
              </Span>
            </H4>

            <NavLink href="#">Shop Now</NavLink>
          </BannerCard3>
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard3 img="/assets/images/banners/banner-19.jpg">
            <Paragraph color="white" fontSize={13} letterSpacing={1.2}>
              BEST SELLER
            </Paragraph>

            <H4 color="white" fontSize={20} lineHeight={1} my="1rem">
              TRENDING WOMEN’S
              <br />
              <Span fontWeight={400}>SUNGLASSES</Span>
            </H4>

            <NavLink href="#" style={{ color: "white" }}>
              Shop Now
            </NavLink>
          </BannerCard3>
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard3 img="/assets/images/banners/banner-20.jpg">
            <Paragraph fontSize={13} letterSpacing={1.2}>
              NEW ARRIVALS
            </Paragraph>

            <H4 fontSize={20} lineHeight={1} my="1rem">
              NEW LATEST BAG
              <br />
              <Span fontWeight={400}>COLLECTION</Span>
            </H4>

            <NavLink href="#">Shop Now</NavLink>
          </BannerCard3>
        </Grid>
      </Grid>
    </Container>
  );
}
