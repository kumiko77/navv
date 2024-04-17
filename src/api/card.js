import request from '@/utils/request'

export function getCategoryList (parameter = {}) {
  return request({
    url: '/category/list',
    method: 'get',
    params: parameter
  })
}

export function getNavList (parameter = {}) {
  return request({
    url: '/nav/list',
    method: 'get',
    params: parameter
  })
}
