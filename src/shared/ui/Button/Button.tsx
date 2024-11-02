import { FC } from 'react';
import cn from 'classnames';
import { ButtonProps } from 'src/shared/ui/Button/Button.props';
import styles from 'src/shared/ui/Button/Button.module.css';

import ArrowIcon from './chevron.svg';
export const Button: FC<ButtonProps> = ({
  children,
  className,
  appearance = 'primary',
  arrow = 'none',
  ...rest
}) => {
  const x = 1;
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
      })}
      {...rest}
    >
      {children}
      <ArrowIcon
        className={cn(styles.arrow, {
          [styles.down]: arrow === 'down',
          [styles.none]: arrow === 'none',
        })}
      />
    </button>
  );
};
