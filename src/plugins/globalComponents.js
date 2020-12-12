import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Spinner from "../components/shared/Spinner"

const GlobalComponents = {
  install(Vue) {
    Vue.component("Spinner", Spinner);
    Vue.component("Header", Header);
    Vue.component("Footer", Footer);
  }
};

export default GlobalComponents;