import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import App from 'containers/App';

import 'normalize.css';
import './index.scss';

const config = configureStore();
const { store } = config;

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
