import { actions } from './action';

const initialState = {
  loading: false,
  token: null
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
      redirect = true;
      return { ...state, loading, redirect, token: action.payload };
    case actions.SETUP_USER:
      return { ...state, loading, token: action.payload };
    case actions.DELETE_USER:
      return { ...state, token: null, redirect: false };
    case actions.GET_SCORE:
      loading = true;
      return { ...state, loading };
    case actions.GET_SCORE_SUCCESS:
      loading = false;
      return { ...state, loading, x: action.payload.x, o: action.payload.o };
    default:
      return state;
  }
}

export default reducer;
