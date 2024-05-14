import request from '@/utils/request'

export function getProjectNavList (parameter = {}) {
  return request({
    url: '/project-nav/list',
    method: 'get',
    params: parameter
  })
}
