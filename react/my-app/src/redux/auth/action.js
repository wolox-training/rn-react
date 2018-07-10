import AuthService from '../../services/AuthService';

export const actions = {
  GET_USERS: '@@AUTH/GET_USERS',
  GET_USERS_SUCCESS: '@@AUTH/GET_USERS_SUCCESS',
  GET_USERS_FAILURE: '@@AUTH/GET_USERS_FAILURE'
};

const actionCreators = {
  getUsers(values) {
    debugger;
    return async dispatch => {
      debugger;
      dispatch({ type: actions.GET_USERS }); // Esta accion es para, por ejemplo, poner un loading para cuando vuelva el request
      const response = await AuthService.getUser(values.eMail, values.password);
      if (response.ok) {
        localStorage.setItem('token', response.token);
        dispatch({ type: actions.GET_USERS_SUCCESS });
      } else {
        dispatch({ type: actions.GET_USERS_FAILURE, payload: response.error });
      }
    };
  }
};

export default actionCreators;
