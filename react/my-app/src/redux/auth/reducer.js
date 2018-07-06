import { actions } from './action';

function reducer(state, action) {
  switch (action.type) {
    case actions.SUBMIT_CLICK:
      // const { eMail, password } = state.value;
      const { users } = state.users;
      users.contains(state.value);
      return state;
    default:
      return state;
  }
}

export default reducer;
