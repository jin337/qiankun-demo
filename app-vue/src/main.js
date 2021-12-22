import './public-path'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance = null
function render(props = {}) {
	const { container } = props
	instance = createApp(App)
	instance.use(store)
	instance.use(router)
	instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
	render()
}
// 启动时调用
export const bootstrap = async () => {}
// 挂载时调用
export const mount = async (props) => {
	// 子应用获取主应用数据
	props.onGlobalStateChange((state, prev) => {
		console.log('app-vue=>', state, prev)
	}, true)

	render(props)
	instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange
	instance.config.globalProperties.$setGlobalState = props.setGlobalState
}
// 卸载时调用
export const unmount = async () => {
	instance.unmount()
	instance._container.innerHTML = ''
	instance = null
}
