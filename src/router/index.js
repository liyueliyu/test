import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import HomeView1 from "@/views/HomeView1.vue";
// import loginView from "@/views/loginView.vue";
import LoginView from "@/views/LoginView.vue";
// import LayoutView from "@/Layout/index.vue";
import LayoutView from "../Layout/index.vue";

const routes = [
  {
    path: "/",
    component: LayoutView,
    children: [
      {
        path: "/home",
        component: HomeView,
      },
      {
        path: "/home1",
        component: HomeView1,
      },
    ],
  },
  {
    path: "/login",
    component: LoginView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
