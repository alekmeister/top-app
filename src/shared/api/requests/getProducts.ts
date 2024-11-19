import { API } from '../routes';
import { MenuItems } from './getMenuItems';

export interface RootInterface {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: ProductCharacteristic[];
  advantages?: string;
  initialRating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  html: string;
  blog: ProductBlog;
  companyId: string;
  clicks: number;
  reviews: ProductReview[];
  reviewCount: number;
  reviewAvg?: number;
}

export interface ProductReview {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductBlog {
  text: string;
  _id: string;
  bigImage?: string;
}

export interface ProductCharacteristic {
  name: string;
  value: string;
}

export async function getProducts(body: {
  category: string;
  limit: number;
}): Promise<MenuItems[] | null> {
  const res = await fetch(API.topPage.product.find, {
    method: 'POST',
    body: JSON.stringify({
      body,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}
