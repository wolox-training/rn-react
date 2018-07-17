import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import authActions from '../../../redux/auth/action';
import ROUTES from '../../../constants/routes';

import LoginForm from './layout';

function Login({ handleSubmit, redirect, loading }) {
  return redirect ? <Redirect to={ROUTES.HOME} /> : <LoginForm onSubmit={handleSubmit} loading={loading} />;
}

Login.propTypes = {
  handleSubmit: PropTypes.func,
  redirect: PropTypes.bool,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  eMail: state.auth.eMail,
  password: state.auth.password,
  redirect: state.auth.redirect
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => {
    dispatch(authActions.getUsers(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
