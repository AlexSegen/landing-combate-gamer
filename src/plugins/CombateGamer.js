import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VuePaginate from "vue-paginate";

//Vendors
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//css assets
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/main.scss";


export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
    Vue.use(VuePaginate);
  }
}