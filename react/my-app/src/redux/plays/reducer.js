import { combineReducers } from 'redux';
import { actions } from './action'

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true,
  winner: null
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SQUARE_CLICK:
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            const winner = calculateWinner(squares);
            if (winner || squares[action.payload]) {
              return {...state,
                winner: winner
              };;
            }
            squares[action.payload] = state.xIsNext ? "X" : "O";

            return {...state,
              history: history.concat([
                {
                  squares: squares
                }
              ]),
              stepNumber: history.length,
              xIsNext: !state.xIsNext,
              winner: winner
            };
        default:
            return state;
    }
}

export default reducer;
