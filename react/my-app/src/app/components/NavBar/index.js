import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

import ROUTES from '../../../constants/routes';

const Links = () => (
  <div className="topnav">
    <NavLink exact className="link" to={ROUTES.HOME}>
      Home
    </NavLink>
    <NavLink className="link" to={ROUTES.SCOREBOARD}>
      ScoreBoard
    </NavLink>
    <NavLink className="link" to="/contact">
      Logout
    </NavLink>
  </div>
);

export default Links;
