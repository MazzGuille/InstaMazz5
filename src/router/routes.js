
const routes = [  
  {
    path: '/',
    component: () => import('layouts/LogRegLayouy.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/feed',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/feed', component: () => import('src/pages/Feed.vue') },
      { path: '/profile', component: () => import('src/pages/Profile.vue') }
    ]
  },

  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
