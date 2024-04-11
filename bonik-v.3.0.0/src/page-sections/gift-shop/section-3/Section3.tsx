import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H3, H6, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { LeftContentBox, RightContent, RightContentBox, StyledLink } from "./styles";

export default function Section3() {
  return (
    <Grid container spacing={3}>
      <Grid item md={7} xs={12}>
        <LeftContentBox>
          <RightContent>
            <H6>Holiday’s Offer!</H6>
            <H3>Sale 50% Off</H3>
            <Paragraph py={1}>Use Code : Holi50</Paragraph>
            <StyledLink href="#">Shop Now</StyledLink>
          </RightContent>
        </LeftContentBox>
      </Grid>

      <Grid item md={5} xs={12}>
        <RightContentBox>
          <Box textAlign="center" pt={4}>
            <H6>Shop Online Gift Under</H6>
            <H3>$20.00</H3>
            <StyledLink href="#">Shop Now</StyledLink>
          </Box>
        </RightContentBox>
      </Grid>
    </Grid>
  );
}
