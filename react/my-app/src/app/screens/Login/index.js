import React, { Component } from 'react';

import authActions from '../../../redux/auth/action';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = values => {
    const { dispatch } = this.props;
    dispatch(authActions.squareClicked(values));
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}
export default Login;
