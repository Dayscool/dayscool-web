import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
  path: "/nani",
  name: "Curso",
    component: () =>
      import("../views/trying.vue")
  },{
    path: "/actividades",
    name: "Actividad",
    component: () =>
      import("../views/Actividades.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
 