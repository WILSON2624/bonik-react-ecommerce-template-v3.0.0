import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/address";
// GLOBAL CUSTOM COMPONENTS
import { Card1 } from "@component/Card1";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { BackToAddress, AddressForm } from "@sections/customer-dashboard/address";
// CUSTOM DATA MODEL
import { IDParams } from "interfaces";

const AddressDetails = async ({ params }: IDParams) => {
  const address = await api.getAddress(String(params.id));

  return (
    <Fragment>
      <DashboardPageHeader iconName="pin_filled" title="Edit Address" button={<BackToAddress />} />

      <Card1 borderRadius={8}>
        <AddressForm address={address} />
      </Card1>
    </Fragment>
  );
};

export default AddressDetails;
