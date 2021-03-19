import type { MeState } from 'types';
import { Theme } from 'types';
import createReducer from 'store/createReducer';
import { ME_ACTIONS } from './handlers';

const initialState: MeState = {
  theme: Theme.dark,
};

export default createReducer(initialState, ME_ACTIONS);
