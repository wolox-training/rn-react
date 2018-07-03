import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../components/Board/index';
import { connect } from "react-redux";
import { squareClicked } from '../redux/plays/action'

class Game extends Component {
  // state = {
  //   history: [
  //     {
  //       squares: Array(9).fill(null)
  //     }
  //   ],
  //   stepNumber: 0,
  //   xIsNext: true,
  //   winner: null
  // };

  jumpTo = (step) =>{
    // this.setState({
    //   stepNumber: step,
    //   xIsNext: (step % 2) === 0
    // });
  }

  handleClick = (id) =>{
    this.props.dispatch(squareClicked(id));
  }

  render() {
    console.log(this.props);
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = this.props.winner;

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
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
  history:PropTypes.array,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  history: state.play.history,
  stepNumber: state.play.stepNumber,
  xIsNext: state.play.xIsNext,
  winner: state.play.winner
});

export default connect(mapStateToProps)(Game);
