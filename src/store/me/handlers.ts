import type { ActionFn, MeState } from 'types';
import { MeActionTypes } from './actionTypes';
import { meChangeThemeSuccess } from './actions';

type MeStateActionFn<F extends (...args: any) => any> = ActionFn<MeState, ReturnType<F>>;

const changeTheme: MeStateActionFn<typeof meChangeThemeSuccess> = (state, { payload }) => ({
  ...state,
  payload,
});

export const ME_ACTIONS = {
  [MeActionTypes.CHANGE_THEME_SUCCESS]: changeTheme,
};
