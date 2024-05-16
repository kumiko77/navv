import { useUserStoreWithOut } from '@/store/modules/user'
import { message } from 'ant-design-vue'
import axios from 'axios'

const baseURL = 'https://www.kami77.cn/navv-api/'

const request = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 30
})

// 异常拦截处理器
const errorHandler = (error) => {
  const { data } = error.response
  if(data.status === 403) {
    message.error('授权失败')
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  const userStore = useUserStoreWithOut()
  const token = userStore.getToken
  if(token) {
    config.headers['Authorization'] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  if(response.data.code === 401) {
    const userStore = useUserStoreWithOut()
    message.warning(response.data.message)
    userStore.logout('')
  }
  return response.data
}, errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios,
  baseURL
}

