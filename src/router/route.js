// @unocss-include
import page from '@/layout/page.vue';
export const baseRoute = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '主页'
    },
    component: () => import('@/views/home/index.vue')
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
    redirect: '/nav',
    component: () => import('@/layout/base.vue'),
    children: [
      {
        path: '/nav',
        name: 'nav', 
        icon: 'i-carbon-navaid-dme',
        redirect: '/nav/category',
        component: page,
        meta: {
          title: '导航管理'
        },
        children: [
          {
            path: '/nav/category',
            name: 'navCategory', 
            component: () => import('@/views/home/index.vue'),
            meta: {
              title: '导航分类管理'
            },
          },
          {
            path: '/nav/homeNav',
            name: 'homeNav', 
            component: () => import('@/views/nav/homeNav/index.vue'),
            meta: {
              title: '首页导航'
            },
          },
          {
            path: '/nav/projectNav',
            name: 'projectNav', 
            component: () => import('@/views/nav/projectNav/index.vue'),
            meta: {
              title: '项目导航'
            },
          },
        ]
      }
    ]
  }
];

export const mergeRoute = [...baseRoute, ...authRoute]
