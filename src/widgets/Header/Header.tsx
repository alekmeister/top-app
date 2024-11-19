import cn from 'classnames';
import type { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return <div className={cn(styles.header, className)}></div>;
};
