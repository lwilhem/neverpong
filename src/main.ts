import '@unocss/reset/antfu.css'
import 'uno.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.url),
  routes,
})
const app = createApp(App)

app.use(router)

app.mount('#app')
