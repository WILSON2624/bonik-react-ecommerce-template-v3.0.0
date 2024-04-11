import axios from "@lib/axios";
import Product from "models/product.model";
import { HealthCarouselItem } from "models/carousel.model";

const getNavigation = async () => {
  const response = await axios.get("/api/health-beauty/navigation");
  return response.data;
};

const getTopNewProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/health-beauty/products?tag=new");
  return response.data;
};

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/health-beauty/products");
  return response.data;
};

const getServices = async (): Promise<Product[]> => {
  const response = await axios.get("/api/health-beauty/services");
  return response.data;
};

const getMainCarousel = async (): Promise<HealthCarouselItem[]> => {
  const response = await axios.get("/api/health-beauty/main-carousel");
  return response.data;
};

export default { getProducts, getServices, getNavigation, getTopNewProducts, getMainCarousel };
