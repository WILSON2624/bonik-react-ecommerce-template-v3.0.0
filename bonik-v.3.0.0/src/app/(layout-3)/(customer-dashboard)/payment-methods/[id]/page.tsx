import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Card1 } from "@component/Card1";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { BackToMethods, MethodEditForm } from "@sections/customer-dashboard/payment-method";
// CUSTOM DATA MODEL
import { IDParams } from "interfaces";

export default function PaymentMethodEditor({ params }: IDParams) {
  return (
    <Fragment>
      <DashboardPageHeader
        button={<BackToMethods />}
        iconName="credit-card_filled"
        title={`${params.id === "add" ? "Add New" : "Edit"} Payment Method`}
      />

      <Card1 borderRadius={8}>
        <MethodEditForm />
      </Card1>
    </Fragment>
  );
}
