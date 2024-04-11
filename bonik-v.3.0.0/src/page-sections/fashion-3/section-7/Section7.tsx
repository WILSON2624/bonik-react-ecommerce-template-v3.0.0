import Container from "@component/Container";
import { H4, Span } from "@component/Typography";
import Service from "@models/service.model";

// STYLED COMPONENTS
import { Wrapper } from "./styles";

// =====================================================
type Props = { services: Service[] };
// =====================================================

export default function Section7({ services }: Props) {
  return (
    <Container mt="4rem">
      <Wrapper>
        {services.map((item) => (
          <div className="item" key={item.id}>
            <H4 lineHeight={1.3}>{item.title}</H4>
            <Span color="grey.600">{item.description}</Span>
          </div>
        ))}
      </Wrapper>
    </Container>
  );
}
