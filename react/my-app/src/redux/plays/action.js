export const actions = {
  SQUARE_CLICK: '@@PLAYS/SQUARE_CLICK'
};

const actionCreators = {
  squareClicked: id => ({ type: actions.SQUARE_CLICK, payload: id })
};

export default actionCreators;
