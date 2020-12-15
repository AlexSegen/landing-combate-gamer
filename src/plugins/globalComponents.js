import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Spinner from "../components/shared/Spinner"

import Slick from 'vue-slick';

const GlobalComponents = {
  install(Vue) {
    Vue.component("Spinner", Spinner);
    Vue.component("Header", Header);
    Vue.component("Slick", Slick);
  }
};

export default GlobalComponents;