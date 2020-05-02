import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home/Index";
import CoinDetail from "@/views/Home/CoinDetail";
import About from "@/views/About/Index";
import Error from "@/views/Error/Index";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
