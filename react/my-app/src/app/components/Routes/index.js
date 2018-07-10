import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Game from '../../screens/Game/index';
import Login from '../../screens/Login/index';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <PrivateRoute path="/" component={Game} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
