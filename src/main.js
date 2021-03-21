import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Chart from 'vue-chartjs'

createApp(App)
    .use(router)
    .use(Chart)
    .mount('#app')
