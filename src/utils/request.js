import axios from 'axios'

const baseURL = 'http://47.116.216.13:8080/'

const request = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 30
})

// 异常拦截处理器
const errorHandler = (error) => {
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
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

