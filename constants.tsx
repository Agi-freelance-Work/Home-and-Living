
import { Category, Product, InspirationItem, NavItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Inspiration', path: '/inspiration' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nordic Oak Dining Table',
    category: Category.FURNITURE,
    price: 850,
    image: 'https://plus.unsplash.com/premium_photo-1675744019321-f90d6d719da7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A minimalist oak table perfect for family gatherings.',
    featured: true
  },
  {
    id: '2',
    name: 'Terracotta Hand-thrown Vase',
    category: Category.DECOR,
    price: 45,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFzZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Unique artisan vase with a matte finish.',
    featured: true
  },
  {
    id: '3',
    name: 'Velvet Emerald Armchair',
    category: Category.FURNITURE,
    price: 320,
    image: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Luxurious velvet comfort for your reading nook.',
    featured: true
  },
  {
    id: '4',
    name: 'Brass Floor Lamp',
    category: Category.LIGHTING,
    price: 180,
    image: 'https://images.unsplash.com/photo-1659100171587-a8a5e9d9417a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhc3MlMjBmbG9vciUyMGxhbXB8ZW58MHx8MHx8fDA%3D',
    description: 'Elegant brass lamp that provides soft, warm lighting.',
  },
  {
    id: '5',
    name: 'Abstract Linen Wall Art',
    category: Category.DECOR,
    price: 120,
    image: 'https://plus.unsplash.com/premium_photo-1683121535952-ae8b88639628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGluZW4lMjB3YWxsJTIwYXJ0fGVufDB8fDB8fHww',
    description: 'Textured linen art piece for modern interiors.',
  },
  {
    id: '6',
    name: 'Modular Birch Shelving',
    category: Category.STORAGE,
    price: 450,
    image: 'https://images.unsplash.com/file-1715714113747-b8b0561c490eimage?w=416&dpr=2&auto=format&fit=crop&q=60',
    description: 'Flexible storage solutions for any room size.',
  },
  {
    id: '7',
    name: 'Silk Blend Rug (Sand)',
    category: Category.DECOR,
    price: 550,
    image: 'https://plus.unsplash.com/premium_photo-1725456680345-8b30ad5eb36f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMHJ1Z3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Ultra-soft hand-tufted rug in neutral tones.',
  },
  {
    id: '8',
    name: 'Rattan Accent Chair',
    category: Category.FURNITURE,
    price: 240,
    image: 'https://plus.unsplash.com/premium_photo-1704744489984-871aca42e60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZW50JTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Breathable rattan chair for a bohemian touch.',
  }
];

export const INSPIRATION: InspirationItem[] = [
  { id: 'i1', title: 'The Modern Scandi Lounge', tag: 'Minimalism', image: 'https://picsum.photos/seed/insp1/1000/1200' },
  { id: 'i2', title: 'Industrial Loft Vibes', tag: 'Urban', image: 'https://picsum.photos/seed/insp2/1000/1200' },
  { id: 'i3', title: 'Bohemian Garden Sanctuary', tag: 'Boho', image: 'https://picsum.photos/seed/insp3/1000/1200' },
  { id: 'i4', title: 'The Executive Workspace', tag: 'Productivity', image: 'https://picsum.photos/seed/insp4/1000/1200' },
];
