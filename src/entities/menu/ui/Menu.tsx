import cn from 'classnames';
import type { FC } from 'react';
import {
  getMenuItems,
  MenuItems,
  PageItem,
} from 'shared/api/requests/getMenuItems';
import { TopLevelCategory } from 'shared/api/requests/getPageByAlias';
import { FIRST_LVL_MENU } from '../lib/constants';
import styles from './Menu.module.scss';

interface MenuProps {
  className?: string;
}

async function buildFirstLvL() {
  return (
    <>
      {FIRST_LVL_MENU.map(({ route, icon, name, id }) => (
        <div key={route}>
          <a
            href={route}
            className={styles.first_lvl_item}
          >
            {icon}
            <span>{name}</span>
          </a>
          {buildSecondLvL(id, route)}
        </div>
      ))}
    </>
  );
}

async function buildSecondLvL(id: TopLevelCategory, route: string) {
  const data = await getMenuItems(id);

  return (
    <div>
      {data?.map(({ _id, isOpen, pages }) => (
        <div
          className={styles.second_lvl_item}
          key={_id.secondCategory}
        >
          <div>{_id.secondCategory}</div>
          <div className={cn({ [styles.isOpen]: isOpen })}>
            {buildThirdLvL([], route)}
          </div>
        </div>
      ))}
    </div>
  );
}

function buildThirdLvL(data: PageItem[], route: string) {
  return (
    <>
      {data.map(({ alias, _id, category }) => (
        <a
          key={_id}
          href={`/${route}/${alias}`}
        >
          {category}
        </a>
      ))}
    </>
  );
}

export const Menu: FC<MenuProps> = async (props) => {
  const { className } = props;

  return <div className={cn(styles.Menu, className)}>{buildFirstLvL()}</div>;
};
