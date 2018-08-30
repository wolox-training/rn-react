import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apiSetup } from '../config/api';
import alertIfHuaweiDevice from '../config/HuaweiPushNotifications';
import configPushNotifications from '../config/PushNotifications';
import { checkAnalyticsTrackingID } from '../redux/middlewares/analyticsMiddleware';
import { authSetup } from '../services/AuthService';

import AppNavigator from './components/AppNavigator';

class App extends Component {
  componentWillMount() {
    configPushNotifications(this.props.dispatch);
    alertIfHuaweiDevice();
    checkAnalyticsTrackingID();
    authSetup(this.props.dispatch);
    apiSetup(this.props.dispatch);
  }

  render() {
    return <AppNavigator />;
  }
}

export default connect()(App);
