import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import { 
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import { fetchMiddleware } from 'redux-recompose';

import { ROOT } from '../constants/platform';
import Navigator from '../app/screens';

import AnalyticsMiddleware from './middlewares/analyticsMiddleware';
import auth from './auth/reducer';
import pushNotifications from './pushNotifications/reducer';

const nav = createNavigationReducer(Navigator);

const reducers = combineReducers({
  pushNotifications,
  auth,
  nav
});

const middlewares = [];
const enhancers = [];

/* ------------- React Navigation Middleware ------------- */
middlewares.push(createReactNavigationReduxMiddleware(ROOT, state => state.nav));

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Analytics Middleware ------------- */
middlewares.push(AnalyticsMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// in dev mode, we'll create the store through Reactotron
const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;
const store = createAppropriateStore(reducers, compose(...enhancers));

export default store;
