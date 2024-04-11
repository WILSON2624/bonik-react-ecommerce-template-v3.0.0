import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/address";
// GLOBAL CUSTOM COMPONENTS
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import {
  AddressItem,
  AddNewAddress,
  AddressPagination
} from "@sections/customer-dashboard/address";

export default async function AddressList() {
  const addressList = await api.getAddressList();

  return (
    <Fragment>
      <DashboardPageHeader title="My Addresses" iconName="pin_filled" button={<AddNewAddress />} />

      {addressList.map((item) => (
        <AddressItem item={item} />
      ))}

      <AddressPagination addressList={addressList} />
    </Fragment>
  );
}
