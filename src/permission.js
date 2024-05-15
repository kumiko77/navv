import router from '@/router'
import { useUserStoreWithOut } from '@/store/modules/user'

const whiteList = ['login']

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStoreWithOut()
  if (userStore.getToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const query = to.query
      const redirect = decodeURIComponent(from.query.redirect || to.path)
      if (to.path === redirect) {
        next()
      } else {
        next({ path: redirect, query: query })
      }
    }
  } else {
    if(whiteList.includes(to.name)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})
