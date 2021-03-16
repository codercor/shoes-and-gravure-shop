import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Reparation from "../views/Reparation.vue";
import Copycles from "../views/Copycles.vue";
import Gravures from "../views/Gravures.vue";
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";

//ADMİN PANEL COMPONENTS
import APanel from "../views/Adminpanel/Panel.vue";
import AHome from "../views/Adminpanel/Home.vue";
import AProducts from "../views/Adminpanel/Products.vue";
import AAdministration from "../views/Adminpanel/Administration.vue";
//ADMİN PANEL COMPONENTS
Vue.use(Router);
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/reparation",
    component: Reparation
  },
  {
    path: "/copycles",
    component: Copycles
  },
  {
    path: "/gravures",
    component: Gravures
  },
  {
    path: "/gravures/:id",
    component: Gravures
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/product/:id",
    component: Product
  },
  {
    path: "/panel",
    name: "Panel",
    component: APanel,
    children: [
      {
        path: "/",
        name: "panel home",
        component: AHome
      },
      {
        path: "/products",
        component: AProducts
      },
      {
        path: "/administration",
        component: AAdministration
      }
    ]
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
