import { TopLevelCategory } from 'shared/api/requests/getPageByAlias';
import BooksIcon from 'shared/assets/menu/book.svg';
import ProductsIcon from 'shared/assets/menu/box.svg';
import ServicesIcon from 'shared/assets/menu/cloud.svg';
import CoursesIcon from 'shared/assets/menu/graduation-cap.svg';
import styles from '../ui/Menu.module.scss';
import { FirstLvLMenuItem } from './types';

export const FIRST_LVL_MENU: FirstLvLMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon className={styles.menu_icon} />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon className={styles.menu_icon} />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon className={styles.menu_icon} />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon className={styles.menu_icon} />,
    id: TopLevelCategory.Products,
  },
];
