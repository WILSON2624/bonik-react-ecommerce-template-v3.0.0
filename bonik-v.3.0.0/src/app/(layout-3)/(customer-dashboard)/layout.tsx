import { PropsWithChildren } from "react";
import CustomerDashboardLayout from "@component/layout/customer-dashboard";

export default function Layout({ children }: PropsWithChildren) {
  return <CustomerDashboardLayout>{children}</CustomerDashboardLayout>;
}
