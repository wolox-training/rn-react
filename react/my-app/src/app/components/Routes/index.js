import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../../screens/Login/index';
import ROUTES from '../../../constants/routes';
import DashBoard from '../../screens/DashBoard';

import { PrivateRoute } from './components/PrivateRoute';

function AppRoutes({ token }) {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <PrivateRoute path={ROUTES.HOME} component={DashBoard} token={token} />
        </Switch>
      </Fragment>
    </Router>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(AppRoutes);
