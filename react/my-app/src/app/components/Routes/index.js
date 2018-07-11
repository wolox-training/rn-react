import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../screens/Game/index';
import Login from '../../screens/Login/index';
import ROUTES from '../../../constants/routes';
import Links from '../NavBar/index';

import { PrivateRoute } from './components/PrivateRoute';

function AppRoutes() {
  return (
    <Router>
      <Fragment>
        <Links />
        <Switch>
          <Route path={ROUTES.LOGIN} render={() => <Login />} />
          <PrivateRoute exact path={ROUTES.SCOREBOARD} component={Login} />
          <PrivateRoute path={ROUTES.HOME} component={Game} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default AppRoutes;
