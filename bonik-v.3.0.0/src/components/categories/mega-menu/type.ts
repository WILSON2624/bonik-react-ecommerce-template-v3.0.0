type Image = { href: string; imgUrl: string };

type SubCategory = { href: string; title: string };

type Category = {
  title: string;
  href?: string;
  subCategories: SubCategory[];
};

type MegaMenu1 = {
  rightImage?: Image;
  bottomImage?: Image;
  categories: Category[];
};

export type MegaMenu1Props = { data: MegaMenu1; minWidth?: string };

type MegaMenu2 = {
  icon: string;
  href: string;
  title: string;
  menuData?: any;
};

export type MegaMenu2Props = { data: MegaMenu2[] };

type MegaMenu3 = { rightImage?: Image; categories: Category[] };

export type MegaMenu3Props = { data: MegaMenu3; minWidth?: string };
