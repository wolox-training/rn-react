import api from '../config/api';

export default {
  getUser: (eMail, password) => api.get('/user', { eMail, password })
};
