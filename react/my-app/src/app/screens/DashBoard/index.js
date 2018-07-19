import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import ROUTES from '../../../constants/routes';

import ScoreBoard from './screens/ScoreBoard';
import Game from './screens/Game';
import NavBar from './components/NavBar';

function DashBoard() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path={ROUTES.SCOREBOARD} component={ScoreBoard} />
        <Route path={ROUTES.HOME} component={Game} />
      </Switch>
    </Fragment>
  );
}

export default DashBoard;
