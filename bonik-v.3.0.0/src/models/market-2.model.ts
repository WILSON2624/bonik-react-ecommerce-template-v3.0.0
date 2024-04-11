import Product from "./product.model";

export interface MainCarouselItem {
  title: string;
  imgUrl: string;
  category: string;
  discount: number;
  buttonLink: string;
  buttonText: string;
  description: string;
}

export interface CategoryBasedProducts {
  products: Product[];
  category: { title: string; children: string[] };
}
