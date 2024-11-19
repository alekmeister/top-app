import cn from 'classnames';
import { format } from 'date-fns';
import type { FC } from 'react';
import styles from './Footer.module.css';
interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <footer className={cn(styles.footer, className)}>
      <div>OwnTop 2020 - {format(new Date(), 'yyyy')}. Все права защищены</div>
      <a>Пользовательское соглашение</a>
      <a>Политика конфиденциальности</a>
    </footer>
  );
};
