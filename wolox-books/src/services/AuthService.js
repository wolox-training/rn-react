import api from '../config/api'

export const logIn = async userDetails => api.post('/users/sessions', userDetails)
export const signUp = async userDetails => api.post('/users', userDetails)
