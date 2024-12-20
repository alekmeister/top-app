import cn from 'classnames';
import { FC } from 'react';
import styles from './P.module.css';
import { PProps } from './P.props';

export const P: FC<PProps> = ({
  children,
  size = 'm',
  className,
  ...props
}) => {
  return (
    <p
      className={cn({
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
        className,
      })}
      {...props}
    >
      {children}
    </p>
  );
};
