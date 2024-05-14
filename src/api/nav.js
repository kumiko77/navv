import request from '@/utils/request'

export function getNavList (parameter = {}) {
  return request({
    url: '/nav/list',
    method: 'get',
    params: parameter
  })
}
export function saveNav (parameter = {}) {
  return request({
    url: '/nav/add',
    method: 'post',
    data: parameter
  })
}
export function updateNav (parameter = {}) {
  return request({
    url: '/nav/update',
    method: 'put',
    data: parameter
  })
}
export function getNav (parameter = {}) {
  return request({
    url: `/nav/${parameter.id}`,
    method: 'get'
  })
}
export function deleteNav (parameter = {}) {
  return request({
    url: `/nav/${parameter.id}`,
    method: 'delete'
  })
}
