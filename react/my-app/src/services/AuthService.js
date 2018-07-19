import api from '../config/api';

export default {
  getUser: async ({ eMail, password }) => api.get(`/user?password=${password}&eMail=${eMail}`),
  getScore: async () => {
    const scores = await api.get('/score');
    const score = scores.data.find(item => item.id === 'navi');
    const ret = { x: 0, o: 0 };
    ret.x = score.x;
    ret.o = score.o;
    return ret;
  }
};

api.post('/score/navy', { x: 15, y: 4 });
