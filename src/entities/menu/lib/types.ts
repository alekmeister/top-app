import { ReactNode } from 'react';
import { TopLevelCategory } from 'shared/api/requests/getPageByAlias';

export interface FirstLvLMenuItem {
  route: string;
  name: string;
  icon: ReactNode;
  id: TopLevelCategory;
}
