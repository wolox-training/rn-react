import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '../../../../../redux/auth/action';

import Board from './layout';

class ScoreBoard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(authActions.getScore());
  }

  render() {
    const { x, o, loading } = this.props;
    return <Board x={x} o={o} loading={loading} />;
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  x: state.auth.x,
  o: state.auth.o
});

ScoreBoard.propTypes = {
  x: PropTypes.number,
  o: PropTypes.number,
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(ScoreBoard);
