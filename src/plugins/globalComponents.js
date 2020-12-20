import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Sidebar from "../components/shared/Sidebar";
import PageLayout from "../components/shared/PageLayout";

import Spinner from "../components/shared/Spinner"
import GoTop from "../components/shared/GoTop"

import Slick from 'vue-slick';

const GlobalComponents = {
  install(Vue) {
    Vue.component("Footer", Footer);
    Vue.component("Header", Header);
    Vue.component("Sidebar", Sidebar);
    Vue.component("PageLayout", PageLayout);
    Vue.component("Spinner", Spinner);
    Vue.component("GoTop", GoTop);
    Vue.component("Slick", Slick);
  }
};

export default GlobalComponents;