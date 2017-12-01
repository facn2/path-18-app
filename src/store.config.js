import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, promiseMiddleware(), logger)
);

export default store;
