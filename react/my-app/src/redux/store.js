import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';

import game from './plays/reducer';
import auth from './auth/reducer';

const middlewares = applyMiddleware(thunk);

const reducers = combineReducers({
  game,
  form,
  auth
});

const store = createStore(reducers, middlewares);

export default store;
