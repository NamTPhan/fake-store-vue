import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { jwtInterceptor, responseInterceptor } from '@/helpers/interceptors';
import './index.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
pinia.use(piniaPluginPersistedstate);

jwtInterceptor();
responseInterceptor();

app.mount('#app');
