// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import type MockAdapter from "axios-mock-adapter";
import { categories, categoriesTwo } from "./data";

export const salesApiEndpoints = (Mock: MockAdapter) => {
  Mock.onGet("/api/sales-1/categories").reply(async () => {
    try {
      return [200, categories];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });

  Mock.onGet("/api/sales-2/categories").reply(async () => {
    try {
      return [200, categoriesTwo];
    } catch (err) {
      console.error(err);
      return [500, { message: "Internal server error" }];
    }
  });
};
