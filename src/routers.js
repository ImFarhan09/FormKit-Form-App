import { createRouter, createWebHistory } from "vue-router";

import FormComponent from "./components/FormComponent.vue";
import UserPage from "./components/UserPage.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    name: "Home",
    component: HomePage,
    path: "/",
  },
  {
    name: "Register",
    component: FormComponent,
    path: "/register",
  },
  {
    name: "User Info",
    component: UserPage,
    path: "/user",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
