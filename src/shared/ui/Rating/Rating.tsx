'use client';
import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
export const Rating: FC<RatingProps> = ({
  rating,
  setRating,
  isEditable,
  ...props
}) => {
  const starLengthArray = new Array(5).fill(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  if (!isEditable) {
    return (
      <div {...props}>
        {starLengthArray.map((_, index) => {
          return (
            <StarIcon
              key={index}
              className={cn(styles.star, { [styles.filled]: index < rating })}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div {...props}>
      {starLengthArray.map((_, index) => {
        const isFilled =
          hoveredStar !== null ? index <= hoveredStar : index < rating;
        return (
          <StarIcon
            key={index}
            className={cn(styles.star, styles.hover, {
              [styles.filled]: isFilled,
            })}
            onMouseEnter={() => setHoveredStar(index)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => setRating(index + 1)}
            tabIndex={1}
            onKeyDown={(e) => {
              if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                setRating(index + 1);
              }
            }}
          />
        );
      })}
    </div>
  );
};
