import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/UserCheckout.vue')
      },
      {
        path: 'payfinished',
        component: () => import('../views/front/PayFinished.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'shoppingnotice',
        component: () => import('../views/front/ShoppingnoticeView.vue')
      },
      {
        path: 'contact',
        component: () => import('../views/front/ContactView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/dashboard/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/AdminCoupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
