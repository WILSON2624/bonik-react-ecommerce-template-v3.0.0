import Link from "next/link";

import Box from "@component/Box";
import Image from "@component/Image";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import AppStore from "@component/AppStore";
import { Paragraph } from "@component/Typography";

// STYLED COMPONENTS
import { StyledBox, StyledLink, Wrapper } from "./styles";
// CUSTOM DATA
import { customerCareLinks, iconList } from "./data";

export default function Footer2() {
  return (
    <footer>
      <Wrapper>
        <Link href="/">
          <Image mb="1.5rem" src="/assets/images/logo.svg" alt="logo" />
        </Link>

        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Paragraph mb="1.25rem" color="gray.500" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in
              gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at
              amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <StyledBox maxWidth="230px" mt="-0.35rem">
              <div>
                {customerCareLinks.map((item, ind) => (
                  <StyledLink href="/" key={ind}>
                    {item}
                  </StyledLink>
                ))}
              </div>

              <FlexBox mx="-5px" mt="1rem">
                {iconList.map((item, ind) => (
                  <Link href="/" key={ind}>
                    <Box
                      m="5px"
                      p="10px"
                      size="small"
                      cursor="pointer"
                      borderRadius="50%"
                      bg="rgba(0,0,0,0.2)">
                      <Icon size="12px" defaultcolor="auto">
                        {item}
                      </Icon>
                    </Box>
                  </Link>
                ))}
              </FlexBox>
            </StyledBox>
          </Grid>
        </Grid>
      </Wrapper>
    </footer>
  );
}
