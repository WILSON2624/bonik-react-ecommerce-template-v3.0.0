import axios from "@lib/axios";
import Blog from "models/blog.model";
import Product from "models/product.model";
import Service from "models/service.model";
import { MainCarouselItem } from "models/market-2.model";

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-shop-3/products");
  return response.data;
};

const getFeatureProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/fashion-shop-3/products?tag=feature");
  return response.data;
};

const getMainCarouselData = async (): Promise<MainCarouselItem[]> => {
  const response = await axios.get("/api/fashion-shop-3/main-carousel");
  return response.data;
};

const getServices = async (): Promise<Service[]> => {
  const response = await axios.get("/api/fashion-shop-3/services");
  return response.data;
};

const getBlogs = async (): Promise<Blog[]> => {
  const response = await axios.get("/api/fashion-shop-3/blogs");
  return response.data;
};

export default { getProducts, getFeatureProducts, getMainCarouselData, getServices, getBlogs };
