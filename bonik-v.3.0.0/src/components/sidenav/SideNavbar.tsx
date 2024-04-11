"use client";

import styled from "styled-components";

import Box from "@component/Box";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import NavLink from "@component/nav-link";
import Scrollbar from "@component/Scrollbar";
import { H5, Span } from "components/Typography";
import { Accordion, AccordionHeader } from "components/accordion";
import CategoryNavList from "@models/categoryNavList.model";

// STYLED COMPONENTS
const NavbarRoot = styled(Card)<{
  isfixed: boolean;
  sidebarstyle: "style1" | "style2";
}>(({ isfixed, sidebarstyle, theme }) => ({
  height: "100%",
  boxShadow: theme.shadows[3],
  borderRadius: "8px",
  position: "relative",
  overflow: isfixed ? "auto" : "unset",
  "& .linkList": {
    transition: "all 0.2s",
    padding: "8px 20px",
    "&:hover": { color: theme.colors.primary.main }
  },
  ...(sidebarstyle === "style2" && {
    height: "100%",
    paddingBottom: 10,
    backgroundColor: theme.colors.paste[50]
  })
}));

const StyledList = styled(FlexBox)(({ theme }) => ({
  padding: "4px 20px",
  alignItems: "center",
  transition: "all 0.2s",
  "& .listCircle": { background: theme.colors.gray[600] },
  "&:hover": {
    "& .listCircle": { background: theme.colors.primary.main }
  }
}));

const BorderBox = styled(FlexBox)<{ linestyle: "dash" | "solid" }>(({ linestyle, theme }) => ({
  marginTop: 5,
  marginBottom: 15,
  "& span": { width: "100%" },
  ...(linestyle === "dash" && {
    borderBottom: "2px",
    borderStyle: "none none dashed none",
    borderColor: theme.colors.primary.main,
    "& span": { display: "none" }
  })
}));

const ColorBorder = styled(Span)<{ grey?: any }>(({ grey, theme }) => ({
  borderRadius: "2px 0 0 2px",
  height: grey ? "2px" : "3px",
  background: grey ? theme.colors.gray[400] : theme.colors.primary.main
}));

const Circle = styled("span")(() => ({
  width: "4px",
  height: "4px",
  marginLeft: "2rem",
  marginRight: "8px",
  borderRadius: "3px"
}));

// ==================================================================
type SideNavbarProps = {
  isFixed?: boolean;
  navList: CategoryNavList[];
  lineStyle?: "dash" | "solid";
  sidebarHeight?: string | number;
  sidebarStyle?: "style1" | "style2";
};
// ==================================================================

export default function SideNavbar(props: SideNavbarProps) {
  const {
    isFixed,
    navList,
    lineStyle = "solid",
    sidebarStyle = "style1",
    sidebarHeight = "auto"
  } = props;

  const renderChild = (childList: any[]) => {
    return childList.map((item, ind) => (
      <NavLink key={ind} href={item.href} color="grey.700">
        <StyledList>
          <Circle className="listCircle" />
          <Span py={0.75} flex="1 1 0" fontSize={14}>
            {item.title}
          </Span>
        </StyledList>
      </NavLink>
    ));
  };

  return (
    <Scrollbar autoHide={false} sx={{ maxHeight: sidebarHeight }}>
      <NavbarRoot isfixed={isFixed as boolean} sidebarstyle={sidebarStyle as any}>
        {navList.map((item, ind) => {
          return (
            <Box key={ind}>
              <Box padding="16px 20px 5px 20px">
                <H5>{item.category}</H5>
                <BorderBox linestyle={lineStyle as any}>
                  <ColorBorder />
                  <ColorBorder grey={1} />
                </BorderBox>
              </Box>

              {item.categoryItem.map((item, ind) => {
                return (
                  <Box mb="2px" color="grey.700" key={ind}>
                    {item.child ? (
                      <Accordion>
                        <AccordionHeader px={0} py={0.75} className="linkList">
                          <FlexBox alignItems="center">
                            <Icon mr="10px" size="20px" defaultcolor="currentColor">
                              {item.icon}
                            </Icon>
                            <Span fontWeight="600" fontSize={14}>
                              {item.title}
                            </Span>
                          </FlexBox>
                        </AccordionHeader>

                        {item.child ? renderChild(item.child) : null}
                      </Accordion>
                    ) : (
                      <NavLink key={item.title} href={item.href as string} color="grey.700">
                        <FlexBox className="linkList" py={0.75}>
                          <Icon mr="10px" size="20px" defaultcolor="currentColor">
                            {item.icon}
                          </Icon>
                          <Span fontWeight="600" fontSize={14}>
                            {item.title}
                          </Span>
                        </FlexBox>
                      </NavLink>
                    )}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </NavbarRoot>
    </Scrollbar>
  );
}
