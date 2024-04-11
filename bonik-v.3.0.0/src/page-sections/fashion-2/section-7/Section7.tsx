import { H1, H3, Paragraph, Span } from "@component/Typography";
// STYLED COMPONENTS
import { StyledButton, StyledRoot } from "./styles";

export default function Section7() {
  return (
    <StyledRoot>
      <H3 fontWeight={400} fontSize={30} lineHeight={1}>
        Extra <Span color="primary.main">30% Off</Span> Online
      </H3>

      <H1 fontSize={50} lineHeight={1} mb={1}>
        Summer Season Sale
      </H1>

      <Paragraph fontWeight={600} fontSize={18} mb={4}>
        Free shipping on orders over $99
      </Paragraph>

      <StyledButton variant="contained" color="primary">
        Shop Now
      </StyledButton>
    </StyledRoot>
  );
}
