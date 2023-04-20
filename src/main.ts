import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import registerStore from './store'
import registerIcons from './global/register-icons'
import Mock from './mock'

const app = createApp(App)
app.use(registerIcons)
app.use(registerStore)
app.use(router)
app.use(Mock)
app.mount('#app')
