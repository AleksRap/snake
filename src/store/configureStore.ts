import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const meConfig = {
  key: 'me',
  storage,
  whitelist: ['theme'],
};

const reducers = {
  ...rootReducer,
  me: persistReducer(meConfig, rootReducer.me),
};

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
    combineReducers(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { store, persistor };
};
