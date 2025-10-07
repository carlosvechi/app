import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue"



const app = createApp(App);
window.app = app.mount('#app');
