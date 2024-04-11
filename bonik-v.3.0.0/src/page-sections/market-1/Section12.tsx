import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { H4, SemiSpan } from "@component/Typography";
import Service from "@models/service.model";

// ==================================================
type Props = { serviceList: Service[] };
// ==================================================

export default function Section12({ serviceList }: Props) {
  return (
    <Container mb="70px">
      <Grid container spacing={6}>
        {serviceList.map((item) => (
          <Grid item lg={3} md={6} xs={12} key={item.id}>
            <FlexBox
              p="3rem"
              as={Card}
              hoverEffect
              height="100%"
              borderRadius={8}
              boxShadow="border"
              alignItems="center"
              flexDirection="column">
              <FlexBox
                size="64px"
                bg="gray.200"
                alignItems="center"
                borderRadius="300px"
                justifyContent="center">
                <Icon color="secondary" size="1.75rem">
                  {item.icon}
                </Icon>
              </FlexBox>

              <H4 mt="20px" mb="10px" textAlign="center">
                {item.title}
              </H4>

              <SemiSpan textAlign="center">{item.description}</SemiSpan>
            </FlexBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
