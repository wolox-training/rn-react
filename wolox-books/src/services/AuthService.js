import api from '../config/api'

export const logIn = (email, password) =>
  api.post('/users/sessions', { session: { email, password } })

export const signUp = userDetails => api.post('/users', userDetails)
