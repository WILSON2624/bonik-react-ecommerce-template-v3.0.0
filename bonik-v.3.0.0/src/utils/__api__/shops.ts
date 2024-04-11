import axios from "@lib/axios";
import Shop from "models/shop.model";
// CUSTOM DATA MODEL
import { SlugParams } from "interfaces";

export const getShopList = async (): Promise<Shop[]> => {
  const response = await axios.get("/api/shops");
  return response.data;
};

export const getSlugs = async (): Promise<SlugParams[]> => {
  const response = await axios.get("/api/shops/slugs");
  return response.data;
};

export const getShopBySlug = async (slug: string): Promise<Shop> => {
  const response = await axios.get("/api/shops/single", { params: { slug } });
  return response.data;
};

export default { getShopList, getSlugs, getShopBySlug };
