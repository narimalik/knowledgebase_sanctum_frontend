import { createWebHashHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import LeftMenu from './components/LeftMenu.vue'
import About from './components/About.vue'
import Registeration from './components/Registeration.vue'
import DetailPage from './components/DetailPage.vue'


const routes = [
  { path: '/', component: HomePage, name:'Home' },
  { path: '/left', component: LeftMenu, name:'left' },
  { path: '/about', component: About, name:'about' },
  { path: '/newuser', component: Registeration, name:'registeration' },
  { path: '/detail/:id', component: DetailPage, name:'DetailPage' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router