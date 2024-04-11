export interface FurnitureCarouselItem {
  id: string | number;
  title: string;
  imgUrl: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
  description: string;
}

export interface GiftCarouselItem {
  id: string | number;
  title: string;
  imgUrl: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface HealthCarouselItem {
  id: number;
  title: string;
  imgUrl: string;
  buttonText: string;
  buttonLink: string;
}

export interface GroceryTwoCarouselItem {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  appStoreLink: string;
  playStoreLink: string;
}
