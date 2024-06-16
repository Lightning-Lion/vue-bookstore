import { createRouter, createWebHistory } from 'vue-router'
import Container from '../views/Container.vue'
import BookDetail from '../views/BookDetailPage.vue'
import CartPage from '../views/CartPage.vue'
import OrderList from '../views/OrderList.vue'
import SearchPage from '../views/SearchPage.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Container
  },
  {
    path: '/BookDetail',
    name: 'BookDetail',
    component: BookDetail
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/OrderList',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/SearchPage',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router