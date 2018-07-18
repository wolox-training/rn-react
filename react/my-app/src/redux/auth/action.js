import { createTypes, completeTypes, withPostSuccess, withSuccess } from 'redux-recompose';

import AuthService from '../../services/AuthService';
import { setToken, deleteToken, getToken } from '../../services/LocalStorageService';

export const actions = createTypes(
  completeTypes(['GET_USERS', 'GET_SCORE'], ['DELETE_USER', 'SETUP_USER']),
  '@@AUTH'
);

const actionCreators = {
  getUsers: values => ({
    type: actions.GET_USERS,
    service: AuthService.getUser,
    payload: values,
    successSelector: response => response.data[0] && response.data[0].id,
    target: 'token',
    injections: withPostSuccess((dispatch, response) => response.data[0] && setToken(response.data[0].id))
  }),
  logoutUser() {
    return dispatch => {
      deleteToken();
      dispatch({ type: actions.DELETE_USER });
    };
  },
  setup() {
    return dispatch => {
      const token = getToken();
      dispatch({ type: actions.SETUP_USER, payload: token });
    };
  },
  getScore() {
    return async dispatch => {
      dispatch({ type: actions.GET_SCORE }); // This action is to, for example, put a loading when the request comes back
      const response = await AuthService.getScore();
      dispatch({ type: actions.GET_SCORE_SUCCESS, payload: response });
    };
  },
  getScore2: () => ({
    type: actions.GET_SCORE,
    service: AuthService.getScore,
    target: 'score'
  })
};

export default actionCreators;
