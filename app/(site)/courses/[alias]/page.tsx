import { Metadata } from 'next';
import { notFound } from 'next/navigation';
//import { getMenuItems } from 'shared/api/requests/getMenuItems';
import { getMenuItems } from 'shared/api/requests/getMenuItems';
import { getPageByAlias } from 'shared/api/requests/getPageByAlias';

export async function generateMetadata({
  params,
}: {
  params: { alias: string };
}): Promise<Metadata> {
  const page = await getPageByAlias(params.alias);
  return {
    title: page?.metaTitle,
  };
}
// eslint-disable-next-line
export async function generateStaticParams(): Promise<any> {
  const menu = await getMenuItems(0);
  return menu?.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias })),
  );
}

type Params = Promise<{ alias: string }>;

export default async function PageProducts(props: { params: Params }) {
  const params = await props.params;
  const page = await getPageByAlias(params.alias);

  if (!page) {
    notFound();
  }
  return <div>{page.title}</div>;
}
