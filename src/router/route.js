export const baseRoute = [
  {
    path: '/base',
    name: 'base',
    redirect: '/base/nav',
    meta: {
      title: '主页'
    },
    component: () => import('@/layout/base.vue'),
    children: [
      {
        path: '/base/nav',
        name: 'baseNav',
        meta: {
          title: '主页'
        },
        component: () => import('@/views/nav/index.vue'),
      },
      {
        path: '/base/project',
        name: 'baseProject',
        meta: {
          title: '主页'
        },
        component: () => import('@/views/project/index.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  }
]

export const authRoute = [
  {
    path: '/',
    name: 'index',
    redirect: '/base/nav',
  }
];

export const mergeRoute = [...baseRoute, ...authRoute]
