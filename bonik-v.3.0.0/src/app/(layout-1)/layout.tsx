import { PropsWithChildren } from "react";
import AppLayout from "@component/layout/layout-1";

export default function Layout({ children }: PropsWithChildren) {
  return <AppLayout>{children}</AppLayout>;
}
