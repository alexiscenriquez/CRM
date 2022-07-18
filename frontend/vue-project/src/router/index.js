import { createRouter, createWebHistory } from "vue-router";
import homeView from "../views/homeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/newcustomer",
      name: "newcustomer",
      component: ()=>import("../views/newCustomer.vue"),
    },
    {path:"/edit",
    name:"edit",
    component:()=>import("../views/editCustomer.vue")
    }],
});

export default router;
