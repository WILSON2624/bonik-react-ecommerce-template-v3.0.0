"use client";

import { PropsWithChildren } from "react";

import AppLayout from "../layout-1";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <AppLayout navbar={<Navbar />}>
      <Container my="2rem">{children}</Container>
    </AppLayout>
  );
}
