import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GameTable } from 'containers';
import meSelectors from 'store/me/selectors';
import { Theme } from 'types';
import styles from './styles.module.scss';

const App: FC = () => {
  const theme = useSelector(meSelectors.getProp('theme'));

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (theme === Theme.light) {
        body.classList.add(theme);
        body.classList.remove(Theme.dark);
      } else {
        body.classList.add(theme);
        body.classList.remove(Theme.light);
      }
    }
  }, [theme]);

  const [isStartGame, setStartGame] = useState<boolean>(false);

  return (
    <div className={styles.background}>
      <GameTable isStartGame={isStartGame} setStartGame={setStartGame} />
    </div>
  );
};

export default App;
