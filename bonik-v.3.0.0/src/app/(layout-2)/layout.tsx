import { PropsWithChildren } from "react";
import ShopLayout from "@component/layout/layout-2";

export default function Layout({ children }: PropsWithChildren) {
  return <ShopLayout showNavbar={false}>{children}</ShopLayout>;
}
