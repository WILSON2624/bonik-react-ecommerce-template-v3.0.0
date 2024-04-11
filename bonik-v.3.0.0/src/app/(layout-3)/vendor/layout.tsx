import { PropsWithChildren } from "react";
// GLOBAL CUSTOM COMPONENTS
import VendorDashboardLayout from "@component/layout/vendor-dashboard";

export default function Layout({ children }: PropsWithChildren) {
  return <VendorDashboardLayout>{children}</VendorDashboardLayout>;
}
