import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../../../../services/LocalStorageService';
import ROUTES from '../../../../constants/routes';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (getToken ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />)} />
);
