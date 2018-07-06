import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import game from './plays/reducer';

const reducers = combineReducers({
  game,
  form
});

const store = createStore(reducers);

export default store;
