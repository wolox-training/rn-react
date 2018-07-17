import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Login/index';
import ROUTES from '../../../constants/routes';

import Game from './screens/Game';
import NavBar from './components/NavBar';

function DashBoard() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path={ROUTES.SCOREBOARD} component={Login} />
        <Route path={ROUTES.HOME} component={Game} />
      </Switch>
    </Fragment>
  );
}

export default DashBoard;
