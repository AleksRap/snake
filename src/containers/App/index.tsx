import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

  return (
    <div className={styles.background} />
  );
};

export default App;
