import api from '../config/api';

export default {
  getUser: async (eMail, password) => {
    const users = await api.get('/user');
    const ret = { ok: false, token: null };
    const user = users.data.find(
      item => item.eMail.toLowerCase() === eMail.toLowerCase() && item.password === password
    );
    if (user) {
      ret.ok = true;
      ret.token = 'acces';
    }
    return ret;
  },
  getScore: async id => {
    const scores = await api.get('/score');
    const score = scores.data.find(item => item.id === id);
    const ret = { x: 0, o: 0 };
    ret.x = score.x;
    ret.o = score.o;
    return ret;
  }
};
