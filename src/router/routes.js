
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dash.vue') },
      { path: 'generica', component: () => import('pages/Dash_gen.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'datos', component: () => import('pages/Datos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
