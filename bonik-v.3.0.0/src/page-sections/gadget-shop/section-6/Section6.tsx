import Link from "next/link";

import Box from "@component/Box";
import Container from "@component/Container";
import { H2, SemiSpan, Small } from "@component/Typography";
// STYLED COMPONENT
import { StyledCard } from "./styles";

export default function Section6() {
  return (
    <Container>
      <StyledCard imgUrl="/assets/images/products/bg-gradient.png" mb="3.75rem" hoverEffect>
        <Box maxWidth="390px">
          <H2 mb="0.5rem">Build Your Own Youtube Studio Save Upto 70%</H2>
          <SemiSpan color="text.muted" display="block" mb="1.5rem">
            Everything you need to create your youtube studio
          </SemiSpan>

          <Link href="/">
            <Small fontWeight="700" borderBottom="2px solid" borderColor="primary.main">
              DISCOVER EQUIPMENTS
            </Small>
          </Link>
        </Box>
      </StyledCard>
    </Container>
  );
}
