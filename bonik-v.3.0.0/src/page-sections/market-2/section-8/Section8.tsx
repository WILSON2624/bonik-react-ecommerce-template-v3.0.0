import Container from "@component/Container";
import { H3, Paragraph, Span } from "@component/Typography";
// STYLED COMPONENTS
import { BannerWrapper, StyledButton } from "./styles";

export default function Section8() {
  return (
    <Container pt="4rem">
      <BannerWrapper>
        <div className="content">
          <H3 fontSize={36} lineHeight={1}>
            GIFT{" "}
            <Span color="primary.main" fontSize="inherit">
              50% OFF
            </Span>{" "}
            PERFECT STYLES
          </H3>
          <Paragraph fontSize={16}>
            Only until the end of this week. Terms and conditions apply
          </Paragraph>
        </div>

        <StyledButton size="large">Discover Now</StyledButton>
      </BannerWrapper>
    </Container>
  );
}
