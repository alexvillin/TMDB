import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home.vue";
import Favourites from "../views/favourites.vue";
import Details from "../views/details.vue";
import Account from "../views/account.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },

  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/favourites',
    component: Favourites,
    name: 'favourites'
  },
  {
    path: '/details/:id',
    component: Details,
    name: 'details'
  },
  {
    path: '/account',
    component: Account,
    name: 'account'
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
