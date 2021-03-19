import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Square } from 'components';
import { TIME_GAME } from 'appConstants';
import { Direction, KeyCodes } from 'types';
import styles from './styles.module.scss';

interface Props {
  isStartGame: boolean,
  setStartGame: (isStartGame: boolean) => void,
}

const SQUARES: number[] = [];

for (let i: number = 1; i <= 100; i += 1) {
  SQUARES.push(i);
}

const isUpBorder = (position: number): boolean => position - 10 < 0;
const isDownBorder = (position: number): boolean => position + 10 > 100;
const isRightBorder = (position: number): boolean => position % 10 === 0;
const isLeftBorder = (position: number): boolean => {
  const str = String(position);
  return str[str.length - 1] === '1';
};

const snakeStartPosition = 14;

const GameTable: FC<Props> = ({
  isStartGame,
  setStartGame,
}) => {
  const [snakePosition, setSnakePosition] = useState<number>(snakeStartPosition);
  const [direction, setDirection] = useState(Direction.right);

  const handleGoTop = useCallback(() => {
    setSnakePosition((position) => {
      if (isUpBorder(position)) {
        setStartGame(false);
        return 1;
      }
      return position - 10;
    });
  }, [setSnakePosition, setStartGame]);

  const handleGoBottom = useCallback(() => {
    setSnakePosition((position) => {
      if (isDownBorder(position)) {
        setStartGame(false);
        return 1;
      }
      return position + 10;
    });
  }, [setSnakePosition, setStartGame]);

  const handleGoRight = useCallback(() => {
    setSnakePosition((position) => {
      if (isRightBorder(position)) {
        setStartGame(false);
        return 1;
      }

      return position + 1;
    });
  }, [setSnakePosition, setStartGame]);

  const handleGoLeft = useCallback(() => {
    setSnakePosition((position) => {
      if (isLeftBorder(position)) {
        setStartGame(false);
        return 1;
      }

      return position - 1;
    });
  }, [setSnakePosition, setStartGame]);

  const handleKeyDown = useCallback((e) => {
    switch (e.code) {
      case KeyCodes.ArrowUp: {
        setDirection(Direction.up);
        break;
      }

      case KeyCodes.ArrowDown: {
        setDirection(Direction.down);
        break;
      }

      case KeyCodes.ArrowLeft: {
        setDirection(Direction.left);
        break;
      }

      case KeyCodes.ArrowRight: {
        setDirection(Direction.right);
        break;
      }

      default: {
        setDirection(Direction.up);
        break;
      }
    }
  }, [setDirection]);

  const handleGame = useCallback(() => {
    if (isStartGame) {
      switch (direction) {
        case Direction.up: {
          handleGoTop();
          break;
        }

        case Direction.down: {
          handleGoBottom();
          break;
        }

        case Direction.left: {
          handleGoLeft();
          break;
        }

        case Direction.right: {
          handleGoRight();
          break;
        }

        default: {
          break;
        }
      }
    }
  }, [isStartGame, direction, handleGoTop, handleGoBottom, handleGoLeft, handleGoRight]);

  useEffect(() => {
    handleGame();

    const interval = setInterval(() => {
      handleGame();
    }, TIME_GAME);

    return () => clearInterval(interval);
  }, [handleGame]);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (html) html.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.gameTable}>
      {SQUARES.map((item, index) => (
        <Square
          isActive={index + 1 === snakePosition}
          key={item}
        />
      ))}

      {!isStartGame && (
        <span>you lose</span>
      )}
    </div>
  );
};

export default GameTable;
