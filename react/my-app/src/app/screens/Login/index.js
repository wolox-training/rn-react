import React, { Component } from 'react';

import LoginForm from './layout';

class Login extends Component {
  getInitialValues(){
    return {
      preference: 'spaces',
      newsletter: true
    };
  }

  render() {
    return <LoginForm onSubmit={this.submit} initialValues={this.getInitialValues()} />;
  }
}

export default Login;
