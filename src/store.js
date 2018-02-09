import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const middlewares = [thunk];

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(applyMiddleware(...middlewares)),
);
export default store;
