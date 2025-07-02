import { createRouter, createWebHistory } from '@ionic/vue-router';
//import HomePage from '../views/HomePage.vue'
import Home from '../pages/Home.vue'
import Catalogo from '../pages/Catalogo.vue';
import DetalleProducto from '../pages/DetalleProducto.vue'
import Carrito from '../pages/Carrito.vue'
import Login from '../pages/Login.vue'
import Registro from '../pages/Registro.vue'
import Perfil from '../pages/Perfil.vue'

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo
  },
  { 
    path: '/detalle/:id', 
    name: 'DetalleProducto',
    component: DetalleProducto 
  },
  { 
    path: '/carrito', 
    component: Carrito 
  },
  { 
    path: '/login', 
    component: Login 
  },
  {
    path: '/registro', 
    component: Registro
  },
  {
    path: '/perfil',
    component: Perfil 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
