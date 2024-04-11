export type CategoryItem = {
  icon: string;
  title: string;
  href?: string;
  child?: { title?: string; href?: string }[];
};

interface CategoryNavList {
  category: string;
  categoryItem: CategoryItem[];
}

export default CategoryNavList;
