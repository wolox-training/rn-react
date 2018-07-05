import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import gameReducer from './plays/reducer';

const reducers = combineReducers({
  gameReducer,
  form
});

const store = createStore(reducers);

export default store;
