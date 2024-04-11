"use client";

import { ReactNode } from "react";

import Sticky from "@component/sticky";
import { HeaderTwo } from "@component/header";
import Navbar2 from "@component/navbar/Navbar2";
import MobileNavigationBar from "@component/mobile-navigation";
// STYLED COMPONENT
import StyledRoot from "../layout-1/styles";

// =========================================================================
type Props = { title?: string; showNavbar?: boolean; children: ReactNode };
// =========================================================================

export default function ShopLayout({ children, showNavbar = true }: Props) {
  return (
    <StyledRoot>
      {/* HEADER AREA */}
      <Sticky fixedOn={0}>
        <HeaderTwo />
      </Sticky>

      {/* CONDITIONALLY RENDER NAVBAR AREA */}
      {showNavbar && (
        <div className="section-after-sticky">
          <Navbar2 />
        </div>
      )}

      {children}

      {/* SMALLER DEVICE NAVIGATION AREA */}
      <MobileNavigationBar />
    </StyledRoot>
  );
}
