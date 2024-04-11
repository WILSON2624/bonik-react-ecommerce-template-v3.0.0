import axios from "@lib/axios";

const getSummeryCards = async () => {
  const response = await axios.get("/api/admin/summery");
  return response.data;
};

const getCountryBasedSales = async () => {
  const response = await axios.get("/api/admin/top-countries");
  return response.data;
};

const getSales = async () => {
  const response = await axios.get("/api/admin/sales");
  return response.data;
};

export default { getSummeryCards, getCountryBasedSales, getSales };
