import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import FlowDesigner from "@/components/flow/designer/FlowDesigner";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // component: Home
    redirect: "/flow"
  },
  {
    path: "/flow",
    name: "flow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/flow/designer/FlowDesigner"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
