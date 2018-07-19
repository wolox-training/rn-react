import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import authActions from './redux/auth/action';
import AppRoutes from './app/components/Routes/index';
import './css/styles.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(authActions.setup());
  }

  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
