import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import authActions from '../../../redux/auth/action';
import ROUTES from '../../../constants/routes';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = values => {
    const { dispatch } = this.props;
    dispatch(authActions.getUsers(values));
  };

  render() {
    const { redirect } = this.props;
    return redirect ? (
      <Redirect to={ROUTES.HOME} />
    ) : (
      <LoginForm onSubmit={this.handleSubmit} loading={this.props.loading} />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  eMail: state.auth.eMail,
  password: state.auth.password,
  redirect: state.auth.redirect
});

export default connect(mapStateToProps)(Login);
