
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
    path: '/inner',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/inner/feed', component: () => import('src/pages/Feed.vue') },
      { path: '/inner/profile', component: () => import('src/pages/Profile.vue') },
      { path: '/inner/chat', component: () => import('src/pages/Chat.vue') },
      { path: '/inner/search', component: () => import('src/pages/Search.vue') }
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
