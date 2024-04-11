import Box from "../Box";
import Card from "../Card";
import Icon from "../icon/Icon";
import FlexBox from "../FlexBox";
import NavLink from "../nav-link";
import MenuItem from "../MenuItem";
import Container from "../Container";
import { Span } from "../Typography";
import StyledNavbar from "./styles";
import navbarNavigations from "@data/navbarNavigations";

// ==============================================================
interface Nav {
  title: string;
  url: string;
  child: Nav[];
  extLink?: boolean;
}

type NavbarProps = { navListOpen?: boolean };
// ==============================================================

export default function Navbar2(props: NavbarProps) {
  const renderNestedNav = (list: any[], isRoot = false) => {
    return list?.map((nav: Nav) => {
      if (isRoot) {
        if (nav.url && nav.extLink)
          return (
            <NavLink
              href={nav.url}
              key={nav.title}
              target="_blank"
              className="nav-link"
              rel="noopener noreferrer">
              {nav.title}
            </NavLink>
          );
        else if (nav.url)
          return (
            <NavLink className="nav-link" href={nav.url} key={nav.title}>
              {nav.title}
            </NavLink>
          );
        if (nav.child)
          return (
            <FlexBox
              className="root"
              position="relative"
              flexDirection="column"
              alignItems="center"
              key={nav.title}>
              <Span className="nav-link">{nav.title}</Span>
              <Box className="root-child">
                <Card mt="1.25rem" py="0.5rem" borderRadius={8} boxShadow="large" minWidth="230px">
                  {renderNestedNav(nav.child)}
                </Card>
              </Box>
            </FlexBox>
          );
      } else {
        if (nav.url)
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>
                <Span fontSize="14px">{nav.title}</Span>
              </MenuItem>
            </NavLink>
          );

        if (nav.child)
          return (
            <Box className="parent" position="relative" minWidth="230px" key={nav.title}>
              <MenuItem color="gray.700">
                <Span flex="1 1 0" fontSize="14px">
                  {nav.title}
                </Span>
                <Icon size="8px" defaultcolor="currentColor">
                  right-arrow
                </Icon>
              </MenuItem>

              <Box className="child" pl="0.5rem">
                <Card py="0.5rem" borderRadius={8} boxShadow="large" minWidth="230px">
                  {renderNestedNav(nav.child)}
                </Card>
              </Box>
            </Box>
          );
      }
    });
  };

  return (
    <StyledNavbar>
      <Container display="flex" justifyContent="space-between" alignItems="center" height="100%">
        <div />
        <FlexBox style={{ gap: 32 }}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
      </Container>
    </StyledNavbar>
  );
}
