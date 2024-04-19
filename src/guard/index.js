import router from '@/router'

router.beforeEach(async (to, from, next) => {
  // const userStore = useUserStoreWithOut()
  // if (userStore.getToken) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
      next()
  //   }
  // } else {
  //   next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
  // }
})
