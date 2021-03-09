import { createRouter, createWebHistory } from 'vue-router'

import Home  from './views/Home.vue'
import About from './views/About.vue'
import DashBoard from './views/DashBoard.vue'
import Document from './views/Document.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'

import store from './store'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes:[
    { 
      path: '/',
      name: 'home', 
      component: Home
    },
    { 
      path: '/about',
      name: 'about', 
      component: About
    },
    { 
      path: '/document',
      name: 'document', 
      component: Document,
      meta: { requiredLogin: true }
    },
    { 
      path: '/dashboard',
      name: 'dashboard', 
      component: DashBoard,
      meta: { requiredLogin: true}
    },
    { 
      path: '/login',
      name: 'login', 
      component: Login,
      meta: { redirectAlreadyLogin: true }
    },
    { 
      path: '/signup',
      name: 'signup', 
      component: Signup
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiredLogin && !store.state.user.isLogin){
    next({name: 'login'})
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin){
    next('/')
  } else {
    next()
  }
 
})

export default router