import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signup',
    meta: { layout: 'auth', requiresAuth: false },
    component: () => import('../views/auth/Signup.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { layout: 'dashboard', requiresAuth: false },
    component: () => import('../views/dashboard/Index.vue')
  },
  {
    path: '/employees',
    name: 'Employees',
    meta: { layout: 'dashboard', requiresAuth: false },
    component: () => import('../views/dashboard/Employees.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'dashboard', requiresAuth: false },
    component: () => import('../views/dashboard/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const authenticated = store.getters.isAuthenticated

  if (requiresAuth && !authenticated) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  return next()
})

export default router
