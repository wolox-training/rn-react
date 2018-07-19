import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ROUTES from '../../../../../constants/routes';
import { getToken } from '../../../../../services/LocalStorageService';

function PrivateRoute({ component: Component, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (token || getToken() ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />)}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  token: PropTypes.string
};

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(PrivateRoute);
