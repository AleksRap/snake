import { fork } from 'redux-saga/effects';

import meSaga from 'store/me/sagas';

export default function* rootSaga() {
  yield fork(meSaga);
}
