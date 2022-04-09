import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios';
import store from './store'
import naive from 'naive-ui'
import 'vfonts/Lato.css'
// app.config.globalProperties.$http = axios;
createApp(App).use(store).use(router).use(naive).mount('#app')
