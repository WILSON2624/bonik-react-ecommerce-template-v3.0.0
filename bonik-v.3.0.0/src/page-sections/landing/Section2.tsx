"use client";

import styled from "styled-components";

import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import Container from "@component/Container";
import { H3, H4 } from "@component/Typography";
import { getTheme } from "@utils/utils";

// STYLED COMPONENT
const StyledContent = styled.div`
  z-index: 1;
  position: relative;

  :after,
  :before {
    content: " ";
    z-index: -1;
    width: 200px;
    height: 100px;
    position: absolute;
    background: ${getTheme("colors.gray.300")};
  }

  :after {
    top: 0;
    right: 0;
    margin-top: -50px;
    margin-right: -100px;
    border-top-right-radius: 300px;
    border-top-left-radius: 300px;
  }

  :before {
    left: 0;
    bottom: 0;
    margin-left: -100px;
    margin-bottom: -50px;
    border-bottom-right-radius: 300px;
    border-bottom-left-radius: 300px;
  }
`;

export default function Section2() {
  return (
    <Container mb="7rem" id="features">
      <H3
        mb="3.75rem"
        fontSize="27px"
        fontWeight="700"
        textAlign="center"
        color="secondary.main"
        style={{ textTransform: "uppercase" }}>
        Powerful Features
      </H3>

      <StyledContent>
        <Grid container spacing={7}>
          {list.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card
                display="flex"
                borderRadius={8}
                minHeight="260px"
                boxShadow="large"
                alignItems="center"
                flexDirection="column"
                justifyContent="center">
                <Icon color="inherit" size="64px" mb="1.5rem">
                  {item.iconName}
                </Icon>

                <H4 fontSize="14px" fontWeight="700" maxWidth="200px" textAlign="center" mx="auto">
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
  { iconName: "verify", title: "SEO Friendly" },
  { iconName: "cloud-data", title: "Server Side Rendered" },
  { iconName: "multivendor", title: "Multi-Vendor Support" },
  { iconName: "code", title: "Clean Code" },
  { iconName: "optimization", title: "Optimized for Mobile" },
  { iconName: "lighting", title: "Blazing Fast" },
  { iconName: "admin-dashboard", title: "Admin Dashboard" },
  { iconName: "figma", title: "Figma Ready" }
];
