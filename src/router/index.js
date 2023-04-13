import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      children: [
        {
          path: 'a'
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogList.vue')
    },
    {
      path: '/blog/detail/:postId',
      name: 'detail',
      component: () => import('@/views/BlogDetail.vue')
    },
    {
      path: '/apiTest',
      name: 'apiTest',
      component: () => import('@/views/ApiListView.vue')
    },
    {
      path: '/axios/:page?',
      name: 'axios',
      component: () => import('@/views/AxiosView.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('@/views/board/BlogIndex.vue'),
      redirect: { name: 'blogList' },
      children: [
        {
          // parameter page로 설정 뒤에 아무 숫자도 안붙었을 경우 처리를 위해 `?` 작성
          path: 'list/:page?',
          name: 'blogList',
          component: () => import('@/views/board/BlogList.vue')
        },
        {
          path: 'detail/:detailId?',
          name: 'blogDetail',
          component: () => import('@/views/board/BlogDetail.vue')
        }
      ]
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/views/store/StoreBasic.vue')
    },
    {
      path: '/storeBlog',
      name: 'storeBlog',
      component: () => import('@/views/store/StoreBlog.vue')
    }
  ]
})

export default router
