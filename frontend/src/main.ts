import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/main.scss';

const app = createApp(App);

app.use(createPinia());

library.add(fas);

app.component('fa-icons', FontAwesomeIcon);
app.mount('#app');
