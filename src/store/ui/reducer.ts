import { UIState, RequestStatus } from 'types';
import { MeActionTypes } from 'store/me/actionTypes';

const initialState: UIState = {
  [MeActionTypes.CHANGE_THEME_SUCCESS]: RequestStatus.INIT,
};

export default (state: UIState = initialState, action: any): UIState => {
  const { type } = action;

  if (type === 'RESET_UI') return initialState;

  const matches = /(.*)_(REQUEST|SUCCESS|ERROR|RESET)/.exec(type) as unknown as [undefined, string, RequestStatus];

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === RequestStatus.RESET ? RequestStatus.INIT : requestState,
  };
};
