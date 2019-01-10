import api from "../config/api";

export const authService = {
  logIn: userDetails => api.post("/sessions", userDetails),
  signUp: userDetails => api.post("/sessions", userDetails)
};
