import cn from 'classnames';
import type { FC } from 'react';
import { Menu } from 'entities/menu';
import styles from './Sidebar.module.css';
interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.sidebar, className)}>
      <Menu />
    </div>
  );
};
