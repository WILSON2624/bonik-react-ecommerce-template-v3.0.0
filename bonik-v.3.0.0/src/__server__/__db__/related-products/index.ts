// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import type MockAdapter from "axios-mock-adapter";
import { frequentlyBoughtData, relatedProducts } from "./data";

export const relatedProductsApiEndpoints = (Mock: MockAdapter) => {
  Mock.onGet("/api/frequently-bought-products").reply(async () => {
    try {
      return [200, frequentlyBoughtData];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/related-products").reply(async () => {
    try {
      return [200, relatedProducts];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
};
