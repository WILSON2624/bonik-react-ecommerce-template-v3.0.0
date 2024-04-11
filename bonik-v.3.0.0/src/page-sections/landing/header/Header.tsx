"use client";

import { useCallback, useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import debounce from "lodash/debounce";

import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import NextImage from "@component/NextImage";
import Typography from "@component/Typography";
import Sidenav from "@component/sidenav/Sidenav";
import { IconButton, Button } from "@component/buttons";
// STYLED COMPONENT
import { HeaderWrapper } from "./styles";

import logo from "../../../../public/assets/images/logo.svg";

const headerHeight = 72;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);

  const toggleSidenav = () => setOpen((open) => !open);

  const scrollListener = useCallback(
    debounce(() => {
      if (window?.scrollY >= headerHeight) setFixed(true);
      else setFixed(false);
    }, 50),
    []
  );

  useEffect(() => {
    if (!window) return;

    scrollListener();
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <HeaderWrapper fixed={isFixed}>
      <Container>
        <FlexBox justifyContent="space-between" alignItems="center" height={headerHeight}>
          <Scroll to="top" duration={400} smooth={true} isDynamic>
            <Box cursor="pointer">
              <NextImage src={logo} alt="logo" />
            </Box>
          </Scroll>

          <FlexBox className="right-links" alignItems="center">
            <Scroll to="features" duration={400} offset={-headerHeight - 16} smooth={true}>
              <Typography className="link" color="text.muted" p="0.25rem 1.25rem">
                Features
              </Typography>
            </Scroll>

            <Scroll to="demos" duration={400} offset={-headerHeight - 16} smooth={true}>
              <Typography className="link" color="text.muted" p="0.25rem 1.25rem">
                Demos
              </Typography>
            </Scroll>

            <Scroll to="technologies" duration={400} offset={-headerHeight - 16} smooth={true}>
              <Typography className="link" color="text.muted" p="0.25rem 1.25rem">
                Technologies
              </Typography>
            </Scroll>
            <a href="https://bonik-documentation.vercel.app/" target="_blank">
              <Typography className="link" color="text.muted" p="0.25rem 1.25rem">
                Documentation
              </Typography>
            </a>

            <a href="https://1.envato.market/oeNbNe">
              <Button variant="outlined" color="secondary">
                Purchase Now
              </Button>
            </a>
          </FlexBox>

          {/* mobile menu */}
          <Sidenav
            width={260}
            open={open}
            position="right"
            toggleSidenav={toggleSidenav}
            handle={
              <IconButton className="menu">
                <Icon>menu</Icon>
              </IconButton>
            }>
            <Box p="1rem">
              <Scroll to="features" duration={400} offset={-headerHeight - 16} smooth={true}>
                <Typography className="link" py="0.5rem" onClick={toggleSidenav}>
                  Features
                </Typography>
              </Scroll>

              <Scroll to="demos" duration={400} offset={-headerHeight - 16} smooth={true}>
                <Typography className="link" py="0.5rem" onClick={toggleSidenav}>
                  Demos
                </Typography>
              </Scroll>

              <Scroll to="technologies" duration={400} offset={-headerHeight - 16} smooth={true}>
                <Typography className="link" py="0.5rem" onClick={toggleSidenav}>
                  Technologies
                </Typography>
              </Scroll>

              <Scroll to="price" duration={400} offset={-headerHeight} smooth={true}>
                <Typography className="link" py="0.5rem" onClick={toggleSidenav} mb="1rem">
                  Pricing
                </Typography>
              </Scroll>

              <Button variant="outlined" color="primary">
                Purchase Now
              </Button>
            </Box>
          </Sidenav>
        </FlexBox>
      </Container>
    </HeaderWrapper>
  );
}
