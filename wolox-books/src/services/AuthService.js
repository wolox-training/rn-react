import api from '../config/api'

export const authService = {
  logIn: userDetails => api.post('/users/sessions', userDetails),
  signUp: userDetails => api.post('/users', userDetails)
}