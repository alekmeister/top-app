import cn from 'classnames';
import { FC } from 'react';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag: FC<TagProps> = ({
  children,
  size = 'm',
  color = 'primary',
  className,
  href,
  hrefProps,
  ...props
}) => {
  const child = href ? <a {...hrefProps}>{children}</a> : children;
  return (
    <div
      className={cn(styles.tag, className, styles[color], styles[size])}
      {...props}
    >
      {child}
    </div>
  );
};
