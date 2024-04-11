"use client";

import { Fragment, PropsWithChildren } from "react";
import Topbar from "@component/topbar";
import { Header } from "@component/header";
import { Footer1 } from "@component/footer";
import Navbar from "@component/navbar/Navbar";
import MobileNavigationBar from "@component/mobile-navigation";

export default function SaleLayout1({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Topbar />
      <Header />
      <Navbar />

      {children}

      <MobileNavigationBar />
      <Footer1 />
    </Fragment>
  );
}
