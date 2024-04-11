import Product from "./product.model";

interface Shop {
  id: string;
  slug: string;
  user: any;
  email: string;
  name: string;
  phone: string;
  address: string;
  rating?: number;
  verified: boolean;
  products?: Product[];
  coverPicture: string;
  profilePicture: string;
  socialLinks: { facebook?: string; youtube?: string; twitter?: string; instagram?: string };
}

export default Shop;
