import axios from "@lib/axios";
import Brand from "models/Brand.model";
import Product from "models/product.model";
import Service from "models/service.model";
import { CategoryBasedProducts, MainCarouselItem } from "models/market-2.model";

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/market-2/products");
  return response.data;
};

const getServices = async (): Promise<Service[]> => {
  const response = await axios.get("/api/market-2/service");
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get("/api/market-2/categories");
  return response.data;
};

const getBrands = async (): Promise<Brand> => {
  const response = await axios.get("/api/market-2/brand");
  return response.data;
};

const getMainCarouselData = async (): Promise<MainCarouselItem[]> => {
  const response = await axios.get("/api/market-2/main-carousel");
  return response.data;
};

const getElectronicsProducts = async (): Promise<CategoryBasedProducts> => {
  const response = await axios.get("/api/market-2/category-based-product?tag=electronics");
  return response.data;
};

const getMenFashionProducts = async (): Promise<CategoryBasedProducts> => {
  const response = await axios.get("/api/market-2/category-based-product?tag=men");
  return response.data;
};

const getWomenFashionProducts = async (): Promise<CategoryBasedProducts> => {
  const response = await axios.get("/api/market-2/category-based-product?tag=women");
  return response.data;
};

export default {
  getBrands,
  getProducts,
  getServices,
  getCategories,
  getMainCarouselData,
  getMenFashionProducts,
  getElectronicsProducts,
  getWomenFashionProducts
};
