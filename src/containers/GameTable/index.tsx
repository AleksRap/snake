import React, { FC } from 'react';
import { Square } from 'components';
import styles from './styles.module.scss';

const SQUARES: number[] = [];

for (let i: number = 1; i <= 100; i += 1) {
  SQUARES.push(i);
}

const GameTable: FC = () => (
  <div className={styles.gameTable}>
    {SQUARES.map(() => (
      <Square />
    ))}
  </div>
);

export default GameTable;
