import { myLocalStorage } from '@/utils/storage'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/Main.vue'),
      children: [
        {
          path: '/main',
          component: () => import('../views/main/home/home.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to) => {
  const token = myLocalStorage.getStorage('token')
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
})

export default router
