import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import game from './plays/reducer';
import auth from './auth/reducer';

const middlewares = applyMiddleware(fetchMiddleware, thunk);

const reducers = combineReducers({
  game,
  form,
  auth
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middlewares));

export default store;
