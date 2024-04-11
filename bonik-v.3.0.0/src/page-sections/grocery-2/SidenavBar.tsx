"use client";

import { Fragment } from "react";
import styled from "styled-components";

import Box from "@component/Box";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import NavLink from "@component/nav-link";
import { SemiSpan } from "@component/Typography";
import { Accordion, AccordionHeader } from "@component/accordion";

import useScroll from "@hook/useScroll";
import { theme } from "@utils/theme";
import { NavWithChild } from "interfaces";
import { CategoryItem } from "@models/categoryNavList.model";

// STYLED COMPONENT
const AccordionHeaderText = styled(FlexBox)({
  flex: "1",
  gap: "0.75rem",
  "&:hover": {
    color: theme.colors.primary.main,
    "& + .caret-icon": { color: theme.colors.primary.main }
  }
});

// ======================================================================================
type Props = { isFixedNave?: boolean; navList: CategoryItem[] };
// =======================================================================================

export default function SidenavBar({ isFixedNave, navList }: Props) {
  const { isFixed } = useScroll();

  const renderChild = (childList: NavWithChild[], type = "parent") => {
    if (type === "parent") {
      return childList.map((item) => (
        <Fragment key={item.title}>
          <NavLink href={item.href} color="gray.700">
            <SemiSpan ml="2rem" py="6px" color="inherit" display="block">
              {item.title}
            </SemiSpan>
          </NavLink>

          {item.child && renderChild(item.child, "child")}
        </Fragment>
      ));
    }

    return childList.map((item, ind) => (
      <NavLink key={ind} href={item.href} color="gray.700">
        <SemiSpan display="block" ml="3rem" py="6px" color="inherit">
          {item.title}
        </SemiSpan>
      </NavLink>
    ));
  };

  return (
    <Card
      borderRadius={8}
      position="relative"
      p="20px 20px 14px 24px"
      overflow={isFixedNave && isFixed ? "auto" : "unset"}>
      {navList.map((item) => (
        <Box mb="0.5rem" key={item.title} color="gray.700">
          {item.child ? (
            <Accordion expanded>
              <AccordionHeader px="0px" py="6px" color="inherit" justifyContent="flex-start">
                <AccordionHeaderText>
                  <Icon variant="small" defaultcolor="currentColor">
                    {item.icon}
                  </Icon>

                  <SemiSpan color="inherit" fontWeight="600" flex="1 1 0">
                    {item.title}
                  </SemiSpan>
                </AccordionHeaderText>
              </AccordionHeader>

              {item.child && renderChild(item.child as NavWithChild[])}
            </Accordion>
          ) : (
            <NavLink href={item.href as string} color="gray.700">
              <FlexBox py="6px" color="inherit">
                <Icon variant="small" mr="0.75rem">
                  {item.icon}
                </Icon>

                <SemiSpan color="inherit" fontWeight="600" mr="9px" flex="1 1 0">
                  {item.title}
                </SemiSpan>
              </FlexBox>
            </NavLink>
          )}
        </Box>
      ))}
    </Card>
  );
}
