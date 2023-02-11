import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from '@/store/login/login'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  // 挂载 pinia
  app.use(pinia)

  // 加载本地数据
  const logginStore = useLoginStore()
  logginStore.LocalStorageAction()
}

export default registerStore
