import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../../../../constants/routes';
import action from '../../../../../redux/auth/action';

const Links = ({ dispatch }) => (
  <div className="topnav">
    <NavLink exact className="link" to={routes.HOME}>
      Home
    </NavLink>
    <NavLink className="link" to={routes.SCOREBOARD}>
      ScoreBoard
    </NavLink>
    <NavLink className="link" onClick={() => dispatch(action.logoutUser())} to={routes.LOGIN}>
      Logout
    </NavLink>
  </div>
);

export default connect()(Links);
