import { API } from '../routes';

export interface MenuItems {
  _id: {
    secondCategory: string;
  };
  isOpen?: boolean;
  pages: PageItem[];
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export async function getMenuItems(
  firstCategory = 0,
): Promise<MenuItems[] | null> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}
