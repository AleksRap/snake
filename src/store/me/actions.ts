import { MeChangeTheme } from 'types';
import { MeActionTypes } from './actionTypes';

export const meChangeTheme = () => ({
  type: MeActionTypes.CHANGE_THEME,
});

export const meChangeThemeSuccess = (payload: MeChangeTheme) => ({
  type: MeActionTypes.CHANGE_THEME_SUCCESS,
  payload,
});
