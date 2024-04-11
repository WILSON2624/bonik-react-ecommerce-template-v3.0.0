import Box from "@component/Box";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Carousel } from "@component/carousel";
import { H5, Span } from "@component/Typography";
// STYLED COMPONENT
import { Wrapper } from "./styles";

// ======================================================================
type Testimonial = {
  id: string;
  rating: number;
  comment: string;
  user: { name: string; avatar: string };
};

type Props = { testimonials: Testimonial[] };
// ======================================================================

export default function Section9({ testimonials }: Props) {
  return (
    <Wrapper>
      <Box m="-0.25rem">
        <Carousel
          spacing="0px"
          showDots={true}
          visibleSlides={1}
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={testimonials.length}>
          {testimonials.map((item) => (
            <Box p="0.25rem" key={item.id}>
              <Card className="carousel-card">
                <FlexBox className="quote-content" position="relative" flexWrap="wrap">
                  <Icon className="quote quote-open">quote-open</Icon>
                  <Avatar className="avatar" src={item.user.avatar} size={64} />

                  <Box maxWidth="410px">
                    <Span color="gray.700">{item.comment}</Span>

                    <H5 mt="0.5rem" fontWeight="700">
                      {item.user.name}
                    </H5>
                  </Box>

                  <Icon className="quote quote-close">quote-close</Icon>
                </FlexBox>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Wrapper>
  );
}
