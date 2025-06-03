const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'Formulario_Vista_Administrador',
        component: () => import('src/pages/Vista_Administrador.vue'),
      },
      {
        path: 'Formulario_Bloque_C_Piso_1',
        component: () => import('src/pages/Bloques/Bloque C/Bloque_C_Piso_1.vue'),
      },
      {
        path: 'Formulario_Bloque_C_Piso_2',
        component: () => import('src/pages/Bloques/Bloque C/Bloque_C_Piso_2.vue'),
      },
      {
        path: 'Formulario_Bloque_C_Piso_3',
        component: () => import('src/pages/Bloques/Bloque C/Bloque_C_Piso_3.vue'),
      },
      {
        path: 'Formulario_Bloque_C_Piso_4',
        component: () => import('src/pages/Bloques/Bloque C/Bloque_C_Piso_4.vue'),
      },
      {
        path: 'Formulario_Bloque_C_Piso_5',
        component: () => import('src/pages/Bloques/Bloque C/Bloque_C_Piso_5.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
