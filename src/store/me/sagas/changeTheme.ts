import { put, select, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { Theme } from 'types';
import { meChangeTheme, meChangeThemeSuccess } from '../actions';
import { MeActionTypes } from '../actionTypes';
import meSelector from '../selectors';

export function* changeThemeSaga({ type }: ReturnType<typeof meChangeTheme>) {
  try {
    yield put(apiActions.request(type));

    const theme: Theme = yield select(meSelector.getProp('theme'));
    const newTheme = theme === Theme.light ? Theme.dark : Theme.dark;

    yield put(meChangeThemeSuccess({
      theme: newTheme,
    }));
  } catch (err) {
    yield put(apiActions.error(type));
  }
}

export default function* listener() {
  yield takeLatest(MeActionTypes.CHANGE_THEME, changeThemeSaga);
}
