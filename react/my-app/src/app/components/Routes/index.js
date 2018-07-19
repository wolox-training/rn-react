import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../../screens/Login';
import ROUTES from '../../../constants/routes';
import DashBoard from '../../screens/DashBoard';

import PrivateRoute from './components/PrivateRoute';

function AppRoutes({ token }) {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <PrivateRoute path={ROUTES.HOME} component={DashBoard} token={token} />
      </Switch>
    </Router>
  );
}

AppRoutes.propTypes = {
  token: PropTypes.string
};

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(AppRoutes);
