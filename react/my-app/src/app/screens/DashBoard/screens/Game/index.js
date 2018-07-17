import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../../../../../components/Board';
import playActions from '../../../../../redux/plays/action';

/* eslint-disable react/no-array-index-key */

class Game extends Component {
  handleClick = id => {
    const { dispatch } = this.props;
    dispatch(playActions.squareClicked(id));
  };

  render() {
    const { history, winner, xIsNext, stepNumber } = this.props;
    const current = history[stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}</div>
          <ol>
            {history.map((step, move) => (
              <li key={move}>
                <button type="button">{move ? `Go to move #${move}` : 'Go to game start'}</button>
              </li>
            ))}
          </ol>
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
