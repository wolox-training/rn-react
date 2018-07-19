import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '../../../../../redux/auth/action';
import Loader from '../../../Login/components/Loader';

import Board from './layout';

class ScoreBoard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(authActions.getScore());
  }

  render() {
    const { loading, x, o } = this.props;
    return loading ? <Loader /> : <Board x={x} o={o} />;
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
