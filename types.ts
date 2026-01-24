
export enum Category {
  FURNITURE = 'Furniture',
  DECOR = 'Decor',
  LIGHTING = 'Lighting',
  STORAGE = 'Storage'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface InspirationItem {
  id: string;
  title: string;
  tag: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}
