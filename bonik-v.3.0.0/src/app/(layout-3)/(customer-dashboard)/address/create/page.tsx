import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Card1 } from "@component/Card1";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { BackToAddress, AddressForm } from "@sections/customer-dashboard/address";

export default function CreateAddress() {
  return (
    <Fragment>
      <DashboardPageHeader
        iconName="pin_filled"
        title="Add New Address"
        button={<BackToAddress />}
      />

      <Card1 borderRadius={8}>
        <AddressForm />
      </Card1>
    </Fragment>
  );
}
