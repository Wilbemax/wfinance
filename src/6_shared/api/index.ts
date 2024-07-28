import axios from 'axios'
import Cookies from 'universal-cookie'
import { AuthResponse } from './type'
import { API_URL } from './config'

const cookies = new Cookies()

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalReq = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalReq._isRetry = true
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        })
        cookies.set('token', response.data.accessToken)
        return $api.request(originalReq)
      } catch (e) {
        console.log(e)
      }
    }
    throw error
  }
)

export default $api
