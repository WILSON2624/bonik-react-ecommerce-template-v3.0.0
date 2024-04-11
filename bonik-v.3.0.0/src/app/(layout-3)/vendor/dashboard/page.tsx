import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/dashboard";
// GLOBAL CUSTOM COMPONENTS
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import DashboardContent from "@sections/vendor-dashboard/dashboard";

export default async function VendorDashboard() {
  const sales = await api.getSales();
  const summeryCards = await api.getSummeryCards();
  const countrySales = await api.getCountryBasedSales();

  return (
    <Fragment>
      <DashboardPageHeader title="Dashboard" iconName="bag_filled" />
      <DashboardContent sales={sales} summeryCards={summeryCards} countrySales={countrySales} />
    </Fragment>
  );
}
