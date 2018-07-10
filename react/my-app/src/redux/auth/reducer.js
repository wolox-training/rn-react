import { actions } from './action';

const initialState = {
  loading: false,
  eMail: null,
  password: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      let loading = true;
      let redirect = false;
      return { ...state, loading };
    case actions.GET_USERS_FAILURE:
      loading = false;
      return { ...state, loading };
    case actions.GET_USERS_SUCCESS:
      loading = false;
      redirect= true;
      return { ...state, loading, redirect };
    default:
      return state;
  }
}

export default reducer;
