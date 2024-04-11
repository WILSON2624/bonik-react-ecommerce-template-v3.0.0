import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { H4, SemiSpan } from "@component/Typography";
import Service from "@models/service.model";

// ===============================================
type Props = { id: string; services: Service[] };
// ===============================================

export default function Section2({ id, services }: Props) {
  return (
    <Container py={84} id={id}>
      <Grid container spacing={6}>
        {services.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <FlexBox
              p="1.5rem"
              shadow={2}
              borderRadius={8}
              alignItems="center"
              backgroundColor="white">
              <Box color="text.muted" mr="1rem">
                <Icon size="44px" defaultcolor="currentColor">
                  {item.icon}
                </Icon>
              </Box>

              <div>
                <H4 color="gray.900" fontSize="1rem" fontWeight="700" ellipsis>
                  {item.title}
                </H4>

                <SemiSpan>{item.description}</SemiSpan>
              </div>
            </FlexBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
