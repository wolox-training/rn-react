import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import AppRoutes from './app/components/Routes/index';
import './css/styles.css';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
