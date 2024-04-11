export type deviceOptions = "xs" | "sm" | "md" | "lg";
export type shadowOptions = "small" | "regular" | "large" | "badge" | "border" | "none";
export type colorOptions = "primary" | "secondary" | "warn" | "error" | "inherit" | "dark";

interface NavItem {
  icon: string;
  href: string;
  title: string;
}

export type NavWithChild = {
  href: string;
  title: string;
  child?: Omit<NavItem, "icon">[];
};

export type Meta = {
  page: number;
  total: number;
  pageSize: number;
  totalPage: number;
};

export interface SearchParams {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export interface IDParams {
  params: { id: string };
}

export interface SlugParams {
  params: { slug: string };
}
