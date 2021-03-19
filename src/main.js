import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ButtonApp from './components/Buttons/ButtonApp.vue'
import ButtonCta from './components/Buttons/ButtonCTA.vue'

const app = createApp(App)
app.use(VueAxios, axios)
app.component('button-app', ButtonApp)
app.component('button-cta', ButtonCta)

app.mount('#app')
