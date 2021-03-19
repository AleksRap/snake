import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  isActive?: boolean,
  className?: string,
}

const Square: FC<Props> = ({
  isActive,
  className,
}) => (
  <div
    className={cx(
      styles.square,
      isActive && styles.active,
      className,
    )}
  />
);

export default Square;
