import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Spinner from "../components/shared/Spinner"
import GoTop from "../components/shared/GoTop"


import Slick from 'vue-slick';

const GlobalComponents = {
  install(Vue) {
    Vue.component("Footer", Footer);
    Vue.component("Header", Header);
    Vue.component("Spinner", Spinner);
    Vue.component("GoTop", GoTop);
    Vue.component("Slick", Slick);
  }
};

export default GlobalComponents;