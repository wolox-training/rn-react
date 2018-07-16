import AuthService from '../../services/AuthService';
import { setToken, deleteToken, getToken } from '../../services/LocalStorageService';

export const actions = {
  GET_USERS: '@@AUTH/GET_USERS',
  GET_USERS_SUCCESS: '@@AUTH/GET_USERS_SUCCESS',
  GET_USERS_FAILURE: '@@AUTH/GET_USERS_FAILURE',
  DELETE_USER: '@@AUTH/DELETE_USER',
  SETUP_USER: '@@AUTH/SETUP_USER'
};

const actionCreators = {
  getUsers(values) {
    return async dispatch => {
      dispatch({ type: actions.GET_USERS }); // Esta accion es para, por ejemplo, poner un loading para cuando vuelva el request
      const response = await AuthService.getUser(values.eMail, values.password);
      if (response.ok) {
        const { token } = response;
        setToken(token);
        dispatch({ type: actions.GET_USERS_SUCCESS, payload: token });
      } else {
        dispatch({ type: actions.GET_USERS_FAILURE, payload: response.error });
      }
    };
  },
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
  }
};

export default actionCreators;
