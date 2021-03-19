import type { State, MeState } from 'types';

export default {
  getProp: <T extends keyof MeState>(propKey: T) => (state: State) => state.me[propKey],
  getWeb3: (state: State) => state.me,
};
