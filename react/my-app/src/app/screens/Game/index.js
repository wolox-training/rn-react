import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../../../components/Board/index';
import playActions from '../../../redux/plays/action';

class Game extends Component {
  handleClick = id => {
    const { dispatch } = this.props;
    dispatch(playActions.squareClicked(id));
  };

  render() {
    const { history, winner, xIsNext, stepNumber } = this.props;
    const current = history[stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  winner: PropTypes.string
};

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  winner: state.game.winner
});

export default connect(mapStateToProps)(Game);
