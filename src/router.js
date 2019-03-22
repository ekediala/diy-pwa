// jshint esversion: 6
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/index',
      redirect: '/'
    },

     {
       path: '/home',
       redirect: '/'
     },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Contact.vue')
    },

    {
      path: '/liquid-soap-making',
      name: 'liquid-soap',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/LiquidSoap.vue')
    },

    {
      path: '/whitener-making',
      name: 'whitener',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Whitener.vue')
    },

    {
      path: '/car-wash-liquid',
      name: 'car-wash',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/CarWash.vue')
    },

    {
      path: '/alcohol-air-freshener',
      name: 'alcohol-based',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/AlcoholBasedAirFreshener.vue')
    },

    {
      path: '/water-air-freshener',
      name: 'water-based',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/WaterBasedAirFreshener.vue')
    },
    {
      path: '/disinfectant-making',
      name: 'disinfectant',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Disinfectant.vue')
    },

    {
      path: '/perfume-making',
      name: 'perfume',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Perfume.vue')
    },

    {
      path: '/tile-cleaner-making',
      name: 'tile-cleaner',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/TileCleaner.vue')
    },

    {
      path: '/insecticide-making',
      name: 'insecticide',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Insecticide.vue')
    },

    {
      path: '/detergent-making',
      name: 'detergent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Detergent.vue')
    },

    {
      path: '*',
      name: 'error',
      component: () => import(/* webpackChunkName: "about" */ './views/NotFound.vue')
    },
  ]
});
