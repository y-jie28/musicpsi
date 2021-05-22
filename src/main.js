import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';

// createApp(App).use(store).use(router).mount('#app');

// it makes the code more readable after breaking into separate lines
const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');