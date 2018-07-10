import api from '../config/api';

export default {
  getUser: async (eMail, password) => {
    const users = await api.get('/user', { eMail, password });
    let ret = { ok: false, token: null };
    const user = users.data.find(
      item => item.eMail.toLowerCase() === eMail.toLowerCase() && item.password === password
    );
    if (user) {
      ret.ok = true;
      ret.token = 'acces';
    }
    // let i;
    // for (const user in users.data) {
    //   if (user.eMail === eMail && user.password === password) {
    //     ret.ok = true;
    //     ret.token = eMail + password;
    //   }
    // }
    // for (i = 0; i < users.data.lenght; i += 1) {
    //   if (users.data[i].eMail === eMail && users.data[i].password === password) {
    //     ret.ok = true;
    //     ret.token = eMail + password;
    //   }
    // }
    return ret;
  }
};
