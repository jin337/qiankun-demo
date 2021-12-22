import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/'),
	routes,
})

export default router
