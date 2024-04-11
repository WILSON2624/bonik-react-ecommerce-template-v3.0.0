import type MockAdapter from "axios-mock-adapter";

import { market1ApiEndpoints } from "./__db__/market-1";
import { market2ApiEndpoints } from "./__db__/market-2";

import { furnitureApiEndpoints } from "./__db__/furniture";

import { grocery1ApiEndpoints } from "./__db__/grocery-1";
import { grocery2ApiEndpoints } from "./__db__/grocery-2";
import { grocery3ApiEndpoints } from "./__db__/grocery-3";

import { giftApiEndpoints } from "./__db__/gift";
import { gadgetApiEndpoints } from "./__db__/gadget";
import { healthBeautyApiEndpoints } from "./__db__/health-beauty";
import { relatedProductsApiEndpoints } from "./__db__/related-products";

import { fashion1ApiEndpoints } from "./__db__/fashion-1";
import { fashion2ApiEndpoints } from "./__db__/fashion-2";
import { fashion3ApiEndpoints } from "./__db__/fashion-3";

import { shopApiEndpoints } from "./__db__/shop";
import { salesApiEndpoints } from "./__db__/sales";
import { adminApiEndpoints } from "./__db__/users";
import { orderApiEndpoints } from "./__db__/orders";
import { ticketApiEndpoints } from "./__db__/ticket";
import { AddressApiEndPoints } from "./__db__/address";
import { productApiEndpoints } from "./__db__/products";
import { dashboardApiEndpoints } from "./__db__/dashboard";

export const MockEndPoints = (Mock: MockAdapter) => {
  market1ApiEndpoints(Mock);
  market2ApiEndpoints(Mock);
  furnitureApiEndpoints(Mock);
  grocery1ApiEndpoints(Mock);
  grocery2ApiEndpoints(Mock);
  grocery3ApiEndpoints(Mock);
  giftApiEndpoints(Mock);
  gadgetApiEndpoints(Mock);
  healthBeautyApiEndpoints(Mock);
  relatedProductsApiEndpoints(Mock);

  fashion1ApiEndpoints(Mock);
  fashion2ApiEndpoints(Mock);
  fashion3ApiEndpoints(Mock);
  shopApiEndpoints(Mock);
  salesApiEndpoints(Mock);
  adminApiEndpoints(Mock);
  orderApiEndpoints(Mock);
  ticketApiEndpoints(Mock);
  AddressApiEndPoints(Mock);
  productApiEndpoints(Mock);
  dashboardApiEndpoints(Mock);

  Mock.onAny().passThrough();
};
