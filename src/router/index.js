import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import Article from '../views/Article.vue'
import Writing from '../views/Writing.vue'

const routes = [

  {
    path: '/page',
    name: 'Page',
    component: Page,
    
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Writing',
        name: 'Writing',
        component: Writing
      },
      {
        path: '/Article/:id',
        name: 'Article',
        component: Article
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  // history:createWebHistory(),
  routes
})


export default router
