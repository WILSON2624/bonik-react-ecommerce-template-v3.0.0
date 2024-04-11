// GLOBAL CUSTOM COMPONENTS
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
// PAGE SECTION COMPONENTS
import CheckoutForm2 from "@sections/checkout/CheckoutForm2";
import CheckoutSummary2 from "@sections/checkout/CheckoutSummary2";

export default function CheckoutAlternative() {
  return (
    <Container my="1.5rem">
      <Grid container spacing={6}>
        <Grid item lg={8} md={8} xs={12}>
          <CheckoutForm2 />
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <CheckoutSummary2 />
        </Grid>
      </Grid>
    </Container>
  );
}
