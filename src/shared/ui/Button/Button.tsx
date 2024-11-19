import cn from 'classnames';
import { FC } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './chevron.svg';

export const Button: FC<ButtonProps> = ({
  children,
  className,
  appearance = 'primary',
  arrow = 'none',
  ...rest
}) => {
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
