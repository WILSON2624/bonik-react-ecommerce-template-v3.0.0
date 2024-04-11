"use client";

import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import { H4, Span } from "@component/Typography";
import Service from "@models/service.model";
// STYLED COMPONENTS
import { Container, Content, IconBox } from "./styles";

// ========================================================
type Props = { services: Service[] };
// ========================================================

export default function Section5({ services = [] }: Props) {
  return (
    <Container>
      <Grid container spacing={3}>
        {services.map((item, ind) => {
          return (
            <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
              <Content>
                <IconBox>
                  <Icon size="40px" color="primary">
                    {item.icon}
                  </Icon>
                </IconBox>

                <div>
                  <H4 fontSize={16} fontWeight="700" color="primary.main">
                    {item.title}
                  </H4>

                  <Span fontSize={14} color="gray.600">
                    {item.description}
                  </Span>
                </div>
              </Content>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
