import { create } from 'apisauce'

export default create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000
})
