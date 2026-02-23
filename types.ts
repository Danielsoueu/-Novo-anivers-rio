export interface MenuItem {
  name: string;
  price: string;
  detail?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}