import axios from "@lib/axios";
import { OfferCard } from "models/grocery-3.model";
import Product from "models/product.model";

const getTopSailedProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-3/products?tag=top-sailed");
  return response.data;
};

const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-3/products");
  return response.data;
};

const getOfferCards = async (): Promise<OfferCard[]> => {
  const response = await axios.get("/api/grocery-3/products?tag=offer");
  return response.data;
};

const getMainCarousel = async () => {
  const response = await axios.get("/api/grocery-3/main-carousel");
  return response.data;
};

export default {
  getOfferCards,
  getAllProducts,
  getMainCarousel,
  getTopSailedProducts
};
