import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue3Toastify from 'vue3-toastify';
import { jwtInterceptor, responseInterceptor } from '@/helpers/interceptors';
import './index.scss';
import 'vue3-toastify/dist/index.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.use(Vue3Toastify, {
  multiple: false,
});
pinia.use(piniaPluginPersistedstate);

jwtInterceptor();
responseInterceptor();

app.mount('#app');
