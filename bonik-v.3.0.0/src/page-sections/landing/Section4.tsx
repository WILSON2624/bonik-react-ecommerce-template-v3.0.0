"use client";

import NextImage from "next/image";
import styled from "styled-components";

import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import { H3, H4 } from "@component/Typography";

import { getTheme } from "@utils/utils";

// STYLED COMPONENT
const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  :after,
  :before {
    content: " ";
    z-index: -1;
    width: 150px;
    height: 150px;
    position: absolute;
    background: ${getTheme("colors.gray.300")};
  }

  :after {
    top: 0;
    right: 0;
    margin-top: -65px;
    margin-right: -75px;
    border-radius: 300px;
    background: #fbeef0;
  }

  :before {
    left: 0;
    bottom: 0;
    margin-left: -75px;
    border-radius: 300px;
    margin-bottom: -65px;
  }
`;

export default function Section4() {
  return (
    <Container mb="7rem" id="technologies">
      <H3
        mb="3.75rem"
        fontSize="27px"
        fontWeight="700"
        textAlign="center"
        color="secondary.main"
        style={{ textTransform: "uppercase" }}>
        Technologies Used
      </H3>

      <StyledContent>
        <Grid container spacing={7}>
          {list.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card
                display="flex"
                borderRadius={4}
                minHeight="260px"
                boxShadow="large"
                alignItems="center"
                flexDirection="column"
                justifyContent="center">
                <Box mb="1rem">
                  <NextImage width={60} height={60} alt="bonik" src={item.imgUrl} />
                </Box>

                <H4 mx="auto" fontSize="14px" fontWeight="700" maxWidth="200px" textAlign="center">
                  {item.title}
                </H4>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContent>
    </Container>
  );
}

const list = [
  { imgUrl: "/assets/images/logos/react.png", title: "React.Js" },
  { imgUrl: "/assets/images/logos/next-js.png", title: "Next.Js" },
  { imgUrl: "/assets/images/logos/typescript.png", title: "Typescript" },
  { imgUrl: "/assets/images/logos/styled-component.png", title: "Styled Component" },
  { imgUrl: "/assets/images/logos/styled-system.png", title: "Styled System" },
  { imgUrl: "/assets/images/logos/carousel.png", title: "Pure React Carousel" },
  { imgUrl: "/assets/images/logos/chart-js.png", title: "Chart.Js" },
  { imgUrl: "/assets/images/logos/formik.png", title: "Formik" }
];
