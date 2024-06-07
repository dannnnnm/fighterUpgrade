import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Wiki from '../views/Wiki.vue';
import path from 'path';
import { SELECTED_CHARS_KEY, getPlayer1Name } from '@/data/consts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/game',
      name: 'game',
      beforeEnter:(to,from,next)=>{
        //TODO: check de login
        let matchCharactersRaw = sessionStorage.getItem(SELECTED_CHARS_KEY);
        if (matchCharactersRaw == null) {
          alert("No hay personajes seleccionados!")
          next({name:"charSelect"})
        }
        else{
          next()
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Game.vue')
    },
    {
      path: '/characterSelection',
      name: 'charSelect',
      beforeEnter:(to,from,next)=>{
        let userStore = getPlayer1Name();
        if(userStore=="No name"){
          alert("Necesitas iniciar sesión para seleccionar personajes")
          next({name: "auth"})
        }
        else{
          next()
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CharSelect.vue')
    },
    {
      path: '/records',
      name: 'records',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RecordGallery.vue')
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: Wiki
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    }
  ]
})

export default router
