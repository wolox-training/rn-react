import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../../../../../constants/routes';
import action from '../../../../../redux/auth/action';

function Links({ logOut }) {
  return (
    <div className="topnav">
      <NavLink exact className="link" to={routes.HOME}>
        Home
      </NavLink>
      <NavLink className="link" to={routes.SCOREBOARD}>
        ScoreBoard
      </NavLink>
      <NavLink className="link" onClick={logOut} to={routes.LOGIN}>
        Logout
      </NavLink>
    </div>
  );
}

Links.propTypes = {
  logOut: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(action.logoutUser());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Links);
