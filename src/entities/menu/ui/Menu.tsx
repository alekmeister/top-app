'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import {
  getMenuItems,
  MenuItems,
  PageItem,
} from 'shared/api/requests/getMenuItems';
import { TopLevelCategory } from 'shared/api/requests/getPageByAlias';
import { FIRST_LVL_MENU } from '../lib/constants';
import styles from './Menu.module.scss';

export const FirstLvLMenu = () => {
  const pathName = usePathname();
  return (
    <>
      {FIRST_LVL_MENU.map(({ route, icon, name, id }) => (
        <div key={route}>
          <Link
            href={`/${route}`}
            className={cn(styles.first_lvl_item, {
              [styles.item__active]: pathName.includes(route),
            })}
          >
            {icon}
            <span>{name}</span>
          </Link>
          <SecondLvLMenu
            id={id}
            route={route}
          />
        </div>
      ))}
    </>
  );
};

const SecondLvLMenu: FC<{ id: TopLevelCategory; route: string }> = ({
  route,
  id,
}) => {
  const [secondLvLData, setSecondLvLData] = useState<MenuItems[] | null>(null);

  useEffect(() => {
    getMenuItems(id).then((resp) => setSecondLvLData(resp));
  }, [id]);

  return (
    <div className={styles.second_block_container}>
      {secondLvLData?.map(({ _id, isOpen = true, pages }) => (
        <div
          className={styles.second_lvl_item}
          key={_id.secondCategory}
        >
          <div>{_id.secondCategory}</div>
          <div>
            {isOpen && (
              <ThirdLvLMenu
                pages={pages.slice(0, 5)}
                route={route}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ThirdLvLMenu: FC<{ pages: PageItem[]; route: string }> = ({
  route,
  pages,
}) => {
  const pathName = usePathname();
  return (
    <>
      {pages.map(({ alias, _id, category }) => (
        <Link
          key={_id}
          href={`/${route}/${alias}`}
          className={cn(styles.third_lvl_item, {
            [styles.item__active]: pathName.includes(alias),
          })}
        >
          {category}
        </Link>
      ))}
    </>
  );
};

export const Menu: FC = () => {
  return <FirstLvLMenu />;
};
