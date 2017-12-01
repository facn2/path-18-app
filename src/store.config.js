import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  applyMiddleware(promiseMiddleware(), logger)
);

export default store;
