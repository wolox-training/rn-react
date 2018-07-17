import React from 'react';
import { connect } from 'react-redux';

export function ScoreBoard({ x, o, loading }) {
  return <ScoerLayout x={x} o={o} loading={loading} />;
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  x: state.auth.x,
  o: state.auth.o
});

export default connect(mapStateToProps)(ScoreBoard);
