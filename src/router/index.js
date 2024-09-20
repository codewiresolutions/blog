import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Groom from '../views/Groom.vue'
import Love from '../views/Love.vue'
import Greeting from '@/views/Greeting.vue'
import Groommen from '@/views/Groommen.vue'
import Femalemaid from '@/views/Femalemaid.vue'
import Ceramony from '@/views/Ceramony.vue'
import gallery from '@/views/gallery.vue'
import Rsvp from '@/views/Rsvp.vue'
import blog from '@/views/blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/Groom',
      name: 'Groom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Groom
    },
    
    {
      path: '/Love',
      name: 'Love',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Love
    },

    {
      path: '/Greeting',
      name: 'Greeting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Greeting
    },
    {
      path: '/Groommen',
      name: 'Groommen',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Groommen
    },
    {
      path: '/Femalemaid',
      name: 'Femalemaid',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Femalemaid
    },
    {
      path: '/Ceramony',
      name: 'Ceramony',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Ceramony
    },
    {
      path: '/Rsvp',
      name: 'Rsvp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Rsvp
    },

    {
      path: '/gallery',
      name: 'gallery',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:gallery
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:blog
    }

  ]
})

export default router
