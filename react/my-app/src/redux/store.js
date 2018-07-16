import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middlewares));

export default store;
