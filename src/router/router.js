import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ImagensDiversas from '../components/ImagensDiversas.vue';
import TextoPrincipal from '../components/TextoPrincipal.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/texto',
    name: 'TextoPrincipal',
    component: TextoPrincipal
  },
  {
    path: '/imagens',
    name: 'ImagensDiversas',
    component: ImagensDiversas
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
