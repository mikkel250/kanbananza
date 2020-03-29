import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Application from './components/Application';

import './index.scss';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__()); // create the store and pass it the reducers. Second arg is to enable redux devtools

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
