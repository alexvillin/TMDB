import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import moment from "vue-moment";
import {BNavbarToggle, BNavbar, BNavbarBrand, BNavbarNav} from "bootstrap-vue/src/components/navbar";
import {BCollapse} from "bootstrap-vue/src/components/collapse";
import {BFormInput} from "bootstrap-vue/src/components/form-input";
import {BFormSelect} from "bootstrap-vue/src/components/form-select";
import {BPagination} from "bootstrap-vue/src/components/pagination";
import {BPaginationNav} from "bootstrap-vue/src/components/pagination-nav";
import {BFormGroup} from "bootstrap-vue/src/components/form-group";
import {BInputGroup} from "bootstrap-vue/src/components/input-group";
import {BCard} from "bootstrap-vue/src/components/card";
import {BMedia} from "bootstrap-vue/src/components/media";
import {BImg} from "bootstrap-vue/src/components/image";
import {BButton} from "bootstrap-vue/src/components/button";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./styles/main.scss";

Vue.config.productionTip = false;
Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-toggle", BNavbarToggle);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-collapse", BCollapse);
Vue.component("b-form-input", BFormInput);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-pagination", BPagination);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-input-group", BInputGroup);
Vue.component("b-card", BCard);
Vue.component("b-img", BImg);
Vue.component("b-media", BMedia);
Vue.component("b-button", BButton);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
