"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Section2 from "./section-2";
import Container from "@component/Container";
import SideNavbar from "@component/sidenav/SideNavbar";
import { deviceSize, layoutConstant } from "@utils/constants";
import CategoryNavList from "@models/categoryNavList.model";

// STYLED COMPONENTS
const StyledContainer = styled(Container)({
  gap: "1.75rem",
  display: "flex",
  padding: "0 !important",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    [`@media (max-width:${deviceSize.md}px)`]: { display: "none" }
  },

  "& .pageContent": {
    left: "unset",
    position: "relative",
    width: `calc(100% - ${layoutConstant.grocerySidenavWidth})`,
    [`@media (max-width:${deviceSize.md}px)`]: { width: "100%", marginLeft: 0 }
  }
});

// ==============================================================
type Props = { sidebarNavList: CategoryNavList[] };
// ==============================================================

export default function ContentBox({ sidebarNavList }: Props) {
  const pageContentRef = useRef<HTMLDivElement | null>(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    if (pageContentRef.current) {
      setSidebarHeight(pageContentRef.current.offsetHeight);
    }
  }, []);
  return (
    <StyledContainer>
      {/* SIDBAR NAVIGATION AREA */}
      <div className="sidenav">
        <SideNavbar
          lineStyle="dash"
          sidebarStyle="style2"
          navList={sidebarNavList}
          sidebarHeight={sidebarHeight || "85vh"}
        />
      </div>

      {/* DISCOUNT BANNER AREA */}
      <div className="pageContent" ref={pageContentRef}>
        <Section2 />
      </div>
    </StyledContainer>
  );
}
