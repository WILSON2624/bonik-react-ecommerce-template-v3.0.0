import Link from "next/link";

import Grid from "@component/grid/Grid";
import NextImage from "@component/NextImage";
import { H4, Paragraph } from "@component/Typography";
// STYLED COMPONENTS
import { ContentBox, LeftContent, RightContent, StyledButton } from "./styles";
// IMAGES
import image from "../../../../public/assets/images/Health Shop/Product (4).png";
import doctorImage from "../../../../public/assets/images/Health Shop/Doctor.png";
import vectorImage from "../../../../public/assets/images/Health Shop/Vector (1).png";

export default function Section2() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Link href="/shops/scarlett-beauty">
          <ContentBox>
            <RightContent px="20px">
              <NextImage src={vectorImage} alt="Vector" style={{ maxWidth: 50 }} />
              <Paragraph mt={2}>Our Pharmaciests are</Paragraph>
              <Paragraph>here to Help People</Paragraph>
            </RightContent>

            <LeftContent px="10px">
              <NextImage src={doctorImage} alt="Doctor" />
            </LeftContent>
          </ContentBox>
        </Link>
      </Grid>

      <Grid item xs={12} md={6}>
        <Link href="/shops/scarlett-beauty">
          <ContentBox px={4}>
            <div className="content">
              <Paragraph sx={{ fontSize: 12 }}>BEAUTY PACK</Paragraph>
              <H4 fontWeight="700">CREAM BRIGHT</H4>
              <H4 fontWeight="700">UP TO 25%</H4>
              <StyledButton>Shop Now</StyledButton>
            </div>

            <div className="content">
              <NextImage alt="shop" src={image} />
            </div>
          </ContentBox>
        </Link>
      </Grid>
    </Grid>
  );
}
