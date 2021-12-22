import './public-path'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

function render(props) {
	const { container } = props
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		container ? container.querySelector('#root') : document.querySelector('#root')
	)
}

if (!window.__POWERED_BY_QIANKUN__) {
	render({})
}
// 启动时调用
export const bootstrap = async () => {}

// 挂载时调用
export const mount = async (props) => {
	render(props)
}

// 卸载时调用
export const unmount = async (props) => {
	const { container } = props
	ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}
