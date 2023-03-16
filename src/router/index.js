import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      children: [
        {
          path: "a",
        },
      ],
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/BlogList.vue"),
    },
    {
      path: "/blog/detail/:postId",
      name: "detail",
      component: () => import("@/views/BlogDetail.vue"),
    },
    {
      path: "/apiTest",
      name: "apiTest",
      component: () => import("@/views/ApiListView.vue"),
    },
    {
      path: "/axios",
      name: "axios",
      component: () => import("@/views/AxiosView.vue"),
    },
  ],
});

export default router;
