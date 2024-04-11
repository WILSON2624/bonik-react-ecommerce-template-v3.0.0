"use client";

import Icon from "@component/icon/Icon";
import Container from "@component/Container";
import { H4, Span } from "@component/Typography";
import Service from "@models/service.model";
// STYLED COMPONENTS
import { ServiceItem, Wrapper } from "./styles";

// ===========================================================
type Section2Props = { serviceList: Service[] };
// ===========================================================

export default function Section2({ serviceList }: Section2Props) {
  return (
    <Container mt="4rem">
      <Wrapper>
        {serviceList.map((item) => {
          return (
            <ServiceItem key={item.id}>
              <Icon size="40px">{item.icon}</Icon>

              <div>
                <H4 lineHeight={1.3}>{item.title}</H4>
                <Span color="gray.600" fontSize={14}>
                  {item.description}
                </Span>
              </div>
            </ServiceItem>
          );
        })}
      </Wrapper>
    </Container>
  );
}
