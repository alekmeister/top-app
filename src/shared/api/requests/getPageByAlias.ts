import { API } from '../routes';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageModel {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: Advantage[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  hh: Hh;
  qas: unknown[];
  addresses: unknown[];
  categoryOn: string;
  blog: Blog;
  sravnikus: Sravnikus;
  learningclub: Sravnikus;
}

export interface Sravnikus {
  metaTitle: string;
  metaDescription: string;
  qas: unknown[];
  _id: string;
}

export interface Blog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface Hh {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: string;
  _id: string;
}

export interface Advantage {
  title: string;
  description: string;
  _id: string;
}

export async function getPageByAlias(
  pageName = '',
): Promise<TopPageModel | null> {
  const res = await fetch(`${API.topPage.byAlias}/${pageName}`, {
    method: 'GET',
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}
