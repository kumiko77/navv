import { h } from 'vue';
import { authRoute } from './route';

export const getMenu = () => {
  return recursion(authRoute[0].children)
}


const recursion = data => {
  return data.map(item => {
    item.meta = item.meta || {}
    const menu = {
      title: item.meta.title,
      label: item.meta.title,
      key: item.path,
      path: item.path
    }
    if(item.icon) {
      menu.icon = h('div', {class: item.icon})
    }
    if(item.children) {
      menu.children = recursion(item.children)
    }
    return menu
  })
}


