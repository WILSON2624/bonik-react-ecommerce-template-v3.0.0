import Grid from "@component/grid/Grid";
import { H2 } from "@component/Typography";
import Container from "@component/Container";
import NextImage from "@component/NextImage";
import Blog from "@models/blog.model";
// STYLED COMPONENTS
import { ImageWrapper, StyledIcon } from "./styles";

// ===========================================================
type Props = { blogs: Blog[] };
// ===========================================================

export default function Section8({ blogs }: Props) {
  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Our Instagram
      </H2>

      <Grid container spacing={2}>
        {blogs.map((item) => (
          <Grid item md={2} sm={4} xs={6} key={item.id}>
            <ImageWrapper>
              <NextImage alt="post" width={100} height={100} src={item.thumbnail} />
              <StyledIcon>instagram</StyledIcon>
            </ImageWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
