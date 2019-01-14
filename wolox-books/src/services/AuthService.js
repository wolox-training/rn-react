import api from '../config/api'

export const logIn = userDetails => api.post('/users/sessions', userDetails)
export const signUp = userDetails => api.post('/users', userDetails)
