import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { H4, SemiSpan } from "@component/Typography";
import Service from "@models/service.model";

// ==========================================================
type Props = { services: Service[] };
// ==========================================================

export default function Section2({ services }: Props) {
  return (
    <Grid container spacing={6}>
      {services.map((item, ind) => (
        <Grid item md={4} sm={6} xs={12} key={ind}>
          <FlexBox
            p="1.5rem"
            borderRadius={8}
            border="1px solid"
            alignItems="center"
            borderColor="gray.400">
            <Box color="text.muted" mr="1rem">
              <Icon size="50px" defaultcolor="currentColor">
                {item.icon}
              </Icon>
            </Box>

            <Box style={{ flex: 1, overflow: "hidden" }}>
              <H4 color="gray.900" fontSize="1.25rem" fontWeight="700" ellipsis>
                {item.title}
              </H4>

              <SemiSpan>{item.description}</SemiSpan>
            </Box>
          </FlexBox>
        </Grid>
      ))}
    </Grid>
  );
}
