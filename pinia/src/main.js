// import router from '../router'
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app').use(router)
// import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './index'
// const pinia = createPinia()

createApp(App).use(router).mount('#app')
// .use(pinia)
