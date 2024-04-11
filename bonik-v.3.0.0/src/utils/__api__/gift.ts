import axios from "@lib/axios";
import Product from "models/product.model";
import Service from "models/service.model";
import Category from "models/category.model";
import { GiftCarouselItem } from "models/carousel.model";
import CategoryNavList from "models/categoryNavList.model";

const getMainCarouselData = async (): Promise<GiftCarouselItem[]> => {
  const response = await axios.get("/api/gift-shop/main-carousel");
  return response.data;
};

const getCategoryNavigation = async (): Promise<CategoryNavList[]> => {
  const response = await axios.get("/api/gift-shop-navigation");
  return response.data;
};

const getPopularProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/gift-shop/products?tag=popular");
  return response.data;
};

const getTopSailedProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/gift-shop/products?tag=top-sailed");
  return response.data;
};

const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/gift-shop/products");
  return response.data;
};

const getServiceList = async (): Promise<Service[]> => {
  const response = await axios.get("/api/gift-shop/service-list");
  return response.data;
};

const getTopCategories = async (): Promise<Partial<Category>[]> => {
  const response = await axios.get("/api/gift-shop/top-categories");
  return response.data;
};

export default {
  getAllProducts,
  getServiceList,
  getTopCategories,
  getPopularProducts,
  getMainCarouselData,
  getTopSailedProducts,
  getCategoryNavigation
};
