import type MockAdapter from "axios-mock-adapter";

import { orders } from "./orders";
import { products } from "./products";
import { cardList, salesData, topCountryList } from "./data";

export const dashboardApiEndpoints = (Mock: MockAdapter) => {
  // dashboard
  Mock.onGet("/api/admin/summery").reply(() => {
    try {
      return [200, cardList];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/admin/top-countries").reply(() => {
    try {
      return [200, topCountryList];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/admin/sales").reply(() => {
    try {
      return [200, salesData];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  // products
  Mock.onGet("/api/admin/products").reply(() => {
    try {
      return [200, products];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  // orders
  Mock.onGet("/api/admin/orders").reply(() => {
    try {
      return [200, orders];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/admin/orders/1").reply((config) => {
    try {
      if (config?.params?.id) {
        const order = orders.find((item) => item.id === config.params.id);
        return [200, order];
      }

      return [200, orders[0]];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
};
