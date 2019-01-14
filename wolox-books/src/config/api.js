import { create } from 'apisauce'
import { localStorageService } from '../services/LocalStorage'

export const api = create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000
})

export const changeHeaders = () =>
  api.setHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorageService.getAccessToken() || ''
  })

export const clearHeaders = () => api.deleteHeader('Authorization')
