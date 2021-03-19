import { fork } from 'redux-saga/effects';

import changeTheme from './changeTheme';

export default function* meSaga() {
  yield fork(changeTheme);
}
