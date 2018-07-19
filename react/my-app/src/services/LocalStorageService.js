const tokenName = 'token';

export const getToken = () => localStorage.getItem(tokenName);
export const setToken = token => localStorage.setItem(tokenName, token);
export const deleteToken = () => localStorage.removeItem(tokenName);
