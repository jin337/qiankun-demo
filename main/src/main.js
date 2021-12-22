import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerMicroApps, start, initGlobalState } from 'qiankun'

// 初始通信
const actions = initGlobalState({
	user: {
		name: '1111',
	},
})

// 主应用数据监控
actions.onGlobalStateChange((state, prev) => {
	console.log('main=>', state, prev)
})

// 注册子应用
registerMicroApps([
	// 当访问activeRule的时候，去加载entry，然后渲染到container
	{
		name: 'vueApp', // 子应用名字
		entry: '//localhost:8081', // 子应用访问入口
		container: '#app-vue', // 子应用渲染出口
		activeRule: '/app-vue', // 子应用路径匹配规则
	},
	{
		name: 'reactApp', // 子应用名字
		entry: '//localhost:8082', // 子应用访问入口
		container: '#app-react', // 子应用渲染出口
		activeRule: '/app-react', // 子应用路径匹配规则
	},
])
start()

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
