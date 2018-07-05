import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../screens/Game/index';
import Login from '../../screens/Login/index';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/ticTacToe" render={() => <Game />} />
        <Route path="/" render={() => <Login />} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
