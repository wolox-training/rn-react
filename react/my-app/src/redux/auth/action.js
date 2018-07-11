import AuthService from '../../services/AuthService';
import { setToken } from '../../services/LocalStorageService';

export const actions = {
  GET_USERS: '@@AUTH/GET_USERS',
  GET_USERS_SUCCESS: '@@AUTH/GET_USERS_SUCCESS',
  GET_USERS_FAILURE: '@@AUTH/GET_USERS_FAILURE'
};

const actionCreators = {
  getUsers(values) {
    return async dispatch => {
      dispatch({ type: actions.GET_USERS }); // Esta accion es para, por ejemplo, poner un loading para cuando vuelva el request
      const response = await AuthService.getUser(values.eMail, values.password);
      if (response.ok) {
        setToken(response.token);
        dispatch({ type: actions.GET_USERS_SUCCESS });
      } else {
        dispatch({ type: actions.GET_USERS_FAILURE, payload: response.error });
      }
    };
  }
};

export default actionCreators;
