import request from '@/utils/request'

export function login (parameter = {}) {
  return request({
    url: '/user/login',
    method: 'post',
    data: parameter
  })
}
