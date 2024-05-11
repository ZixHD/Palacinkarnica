import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Palacinka from '../views/Palacinka.vue'
import Kategorije from '../views/Kategorije.vue'
import Narudzbina from '@/views/Narudzbina.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'


Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/palacinka/:id',
    name: 'palacinka',
    component: Palacinka
  },
  {
    path: '/kategorija',
    name: 'kategorija',
    component: Kategorije
  },
  {
    path: '/narudzbina',
    name: 'narudzbina',
    component: Narudzbina
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
