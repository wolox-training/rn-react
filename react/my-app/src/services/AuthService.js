import api from '../config/api';

export default {
  getUser: async (eMail, password) => {
    const users = await api.get('/user', { eMail, password });
    const ret = { ok: false, token: null };
    const user = users.data.find(
      item => item.eMail.toLowerCase() === eMail.toLowerCase() && item.password === password
    );
    if (user) {
      ret.ok = true;
      ret.token = 'acces';
    }
    return ret;
  }
};
