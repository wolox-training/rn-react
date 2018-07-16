import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../Login/index';
import ROUTES from '../../../constants/routes';

import Game from './screens/Game';
import NavBar from './components/NavBar';

function DashBoard() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path={ROUTES.SCOREBOARD} render={() => <Login />} />
        <Route path={ROUTES.HOME} render={() => <Game />} />
      </Switch>
    </Fragment>
  );
}

export default DashBoard;
