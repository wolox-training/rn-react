import React, { Component } from 'react';

import LoginForm from './layout';

class Login extends Component {
  getInitialValues = () => ({
    preference: 'spaces',
    newsletter: true
  });

  render() {
    return <LoginForm initialValues={this.getInitialValues()} />;
  }
}

export default Login;
