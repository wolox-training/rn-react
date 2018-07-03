import React from 'react';
import ReactDOM from 'react-dom';
import Game from './app/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <Game/>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
