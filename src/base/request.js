import axios from 'axios'
import { Loading, Message } from 'element-ui'

const service = axios.create({
	timeout: 10000, // request timeout
});
let loadingInstance = null;

// 请求拦截器
service.interceptors.request.use(
	config => {
		config.loading = true;
		if (config.requestConfig) {
			if (config.requestConfig.timeout) {
				config.timeout = config.requestConfig.timeout
			}
			config.loading = config.requestConfig.loading
		}
		if (config.loading) {
			loadingInstance = Loading.service({
				lock: true,
				text: '数据加载中，请稍后...',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.4)'
			})
		}

		if (sessionStorage.getItem('token')) {
			// 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
			config.headers['token'] = sessionStorage.getItem('token')
		}
		return config
	},
	err => {
		if (loadingInstance) loadingInstance.close()
		Message.error('请求错误')
		return Promise.reject(err)
	}
)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
	res => {
		if (res.config.responseType === 'blob') {
			return Promise.resolve(res)
		}
		if (res.status === 200) {
			if (loadingInstance) loadingInstance.close()
			return res.data
		}else if (res.status === 401){
			Message.error("token")
			this.$router.push('/Login')
		}else {
			if (loadingInstance) loadingInstance.close()
			Message.error(res.data.msg)
		}
	},
	err => {
		if (err.response.status === 401){
			if (loadingInstance) loadingInstance.close()
			Message.error("token失效！3秒后将跳转至登录页！")
			setTimeout(()=>{
				window.location.href = window.location.href.split('#')[0] + "#/login"
			},3000)
			return Promise.resolve(err)
		}else {
			if (loadingInstance) loadingInstance.close()
			Message.error('请求失败，请稍后再试')
			return Promise.reject(err)
		}
	}
)

export default service
