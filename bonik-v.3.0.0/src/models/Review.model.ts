import User from "./user.model";
import Product from "./product.model";

interface Review {
  id: string;
  rating: number;
  customer: User;
  comment: string;
  product: Product;
  published?: boolean;
}

export default Review;
