import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/client/landing/LandingPage.vue"
      ),
    props: true,
  },
  {
    path: "/shop",
    name: "shop",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/client/shop/ShopPage.vue"
      ),
    props: true,
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/admin/DashboardPage.vue"),
    children: [
      {
        default: true,
        path: "",
        name: "",
        component: () => import("@/views/admin/DashboardContent.vue"),
        props: true,
      },
      {
        path: "items",
        name: "items",
        component: () => import("@/views/admin/ItemPage.vue"),
        props: true,
      },
      {
        path: "customers",
        name: "customers",
        component: () => import("@/views/admin/CustomerPage.vue"),
        props: true,
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/admin/OrderPage.vue"),
        props: true,
      },
      {
        path: "reports",
        name: "reports",
        component: () => import("@/views/admin/ReportPage.vue"),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
