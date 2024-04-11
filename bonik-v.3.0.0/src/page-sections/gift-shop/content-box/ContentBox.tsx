"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

import SideNavbar from "@component/sidenav/SideNavbar";
import CategoryNavList from "@models/categoryNavList.model";
// STYLED COMPONENTS
import { StyledContainer } from "./styles";

// ==============================================================
interface Props extends PropsWithChildren {
  categoryNavigation: CategoryNavList[];
}
// ==============================================================

export default function ContentBox({ categoryNavigation, children }: Props) {
  const pageContentRef = useRef<HTMLDivElement | null>(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => {
    if (pageContentRef.current) {
      setSidebarHeight(pageContentRef.current.offsetHeight);
    }
  }, []);

  return (
    <StyledContainer>
      {/* SIDEBAR NAVIGATION AREA */}
      <div className="sidenav">
        <SideNavbar
          lineStyle="dash"
          sidebarStyle="style2"
          navList={categoryNavigation}
          sidebarHeight={sidebarHeight || "85vh"}
        />
      </div>

      <div className="pageContent" ref={pageContentRef}>
        {children}
      </div>
    </StyledContainer>
  );
}
