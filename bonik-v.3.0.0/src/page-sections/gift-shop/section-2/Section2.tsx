import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import { H4, Span } from "components/Typography";
import Service from "@models/service.model";
// STYLED COMPONENTS
import { Container, IconBox, Item } from "./styles";

// ==================================================
type Props = { services: Service[] };
// ==================================================

export default function Section2({ services = [] }: Props) {
  return (
    <Container>
      <Grid container spacing={3}>
        {services.map(({ id, icon, title, description }) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={id}>
              <Item>
                <IconBox>
                  <Icon>{icon}</Icon>
                </IconBox>

                <div>
                  <H4 mb={0.5} fontSize="1rem" fontWeight="600">
                    {title}
                  </H4>

                  <Span color="gray.600" fontSize={14}>
                    {description}
                  </Span>
                </div>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
