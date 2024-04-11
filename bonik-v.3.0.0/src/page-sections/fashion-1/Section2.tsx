import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import { H3, SemiSpan } from "@component/Typography";
import { Card4 } from "./showcase-cards";

export default function Section2() {
  return (
    <Box mb="1.5rem">
      <Grid container spacing={6}>
        <Grid item lg={3} sm={6} xs={12}>
          <Card
            hoverEffect
            height="100%"
            display="flex"
            p="2rem 3.5rem"
            boxShadow="border"
            alignItems="center"
            flexDirection="column">
            <Icon color="primary" size="50px" mb="1.5rem">
              credit
            </Icon>

            <H3 mb="0.5rem" textAlign="center">
              Secure Payment
            </H3>

            <SemiSpan textAlign="center">100% secured payment & privacy</SemiSpan>
          </Card>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Card
            hoverEffect
            height="100%"
            display="flex"
            p="2rem 3.5rem"
            boxShadow="border"
            alignItems="center"
            flexDirection="column">
            <Icon color="primary" size="50px" mb="1.5rem">
              feedback-thumbs-up
            </Icon>

            <H3 mb="0.5rem" textAlign="center">
              Great Feedback
            </H3>

            <SemiSpan textAlign="center">More than 97% positive & happy customers</SemiSpan>
          </Card>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Card4 />
        </Grid>
      </Grid>
    </Box>
  );
}
