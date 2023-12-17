import { createApp } from 'vue'
import'aframe'
import './style.css'

import App from './App.vue'

createApp(App).mount('#app')
app.config.isCustomElement = (tag) => tag.startsWith('a-');

app.mount('#app');