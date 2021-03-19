import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState: { [key: string]: never } = {}) => {
  const composeEnhancers =
    // any for window devtools extensions
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ||
    compose;

  const store = createStore(
    combineReducers(reducer),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
